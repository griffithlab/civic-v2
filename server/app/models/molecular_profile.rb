class MolecularProfile < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable
  include WithTimepointCounts
  include WithActivities

  has_and_belongs_to_many :variants
  has_and_belongs_to_many :sources
  has_many :assertions
  has_many :submitted_and_accepted_assertions,
    ->() { where.not(status: "rejected") },
    class_name: "Assertion"
  has_many :approvals, through: :assertions

  has_many :evidence_items
  has_many :submitted_and_accepted_evidence_items,
    ->() { where.not(status: "rejected") },
    class_name: "EvidenceItem"

  has_one :evidence_items_by_status
  has_one :evidence_items_by_type
  has_and_belongs_to_many :molecular_profile_aliases, join_table: :molecular_profile_aliases_molecular_profiles
  has_many :source_suggestions
  has_and_belongs_to_many :deprecated_variants,
    ->() { where("variants.deprecated = TRUE") },
    class_name: "Variant"

  has_activity :variant_deprecation_activity, activity_type: "DeprecateVariantActivity"
  has_one :complex_molecular_profile_deprecation_activity,
    as: :subject,
    class_name: "DeprecateComplexMolecularProfileActivity"

  has_activity :variant_creation_activity, activity_type: "CreateVariantActivity"
  has_one :complex_molecular_profile_creation_activity,
    as: :subject,
    class_name: "CreateComplexMolecularProfileActivity"
  has_one :creating_user, through: :complex_molecular_profile_creation_activity, source: :user

  enum :deprecation_reason, [ "duplicate", "invalid_molecular_profile", "other", "variant_deprecated" ]

  validates :name, presence: true

  validate :unique_name_in_context

  searchkick highlight: [ :name, :aliases ], callbacks: :async, word_start: [ :name ]
  scope :search_import, -> { includes(:molecular_profile_aliases, variants: [ :feature ]) }

  after_create -> { MaterializedViews::MolecularProfileBrowseTableRow.refresh_async }

  def search_data
    {
      name: self.display_name,
      aliases: self.molecular_profile_aliases.map(&:name),
    }
  end

  def should_index?
    !deprecated
  end

  def is_multi_variant?
    return self.variants.count > 1
  end

  def is_complex?
    if self.is_multi_variant?
      return true
    else
      return self.name.include? "NOT"
    end
  end

  GENE_REGEX = /#GID(?<id>\d+)/i
  VARIANT_REGEX = /#VID(?<id>\d+)/i

  def mpid
    "MPID#{self.id}"
  end

  def display_name
    segments.map { |s| s.respond_to?(:name) ? s.name : s }.join(" ")
  end

  def link
    Rails.application.routes.url_helpers.url_for("/molecular-profiles/#{self.id}")
  end

  def segments
    # TODO - we could batch these queries if it becomes an issue
    @segments ||= name.split(" ").map do |segment|
      if variant_match = segment.match(VARIANT_REGEX)
        v = Variant.find(variant_match[:id])
        f = Feature.find(v.feature_id)
        [ f, v ]
      else
        segment
      end
    end.flatten
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:evidence_items)
        .group("molecular_profiles.id")
        .select("molecular_profiles.id")
        .where("evidence_items.status != 'rejected'")
        .where("molecular_profiles.deprecated = ?", false)
        .having("MIN(evidence_items.created_at) >= ?", x)
        .distinct
        .count
    }
  end

  def editable_fields
    if is_complex?
      [
        :description,
        :source_ids,
        :molecular_profile_alias_ids,
      ]
    else
      [
        :description,
        :source_ids,
      ]
    end
  end

  def unique_name_in_context
    base_query = self.class.where(
      deprecated: false,
      name: name
    )

    duplicate_name = if in_revision_validation_context
                       base_query
                         .where.not(id: revision_target_id)
                         .exists?
    else
                       if persisted?
                         base_query
                           .where.not(id: id)
                           .exists?
                       else
                         base_query
                           .exists?
                       end
    end

    if duplicate_name
      errors.add(:name, "must be unique. There is already a Molecular Profile with this name.")
    end
  end
end
