class Variant < ApplicationRecord
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable
  include WithTimepointCounts

  belongs_to :feature
  has_many :variant_coordinates, foreign_key: 'variant_id'
  has_many :exon_coordinates, foreign_key: 'variant_id'

  has_and_belongs_to_many :molecular_profiles
  has_many :variant_group_variants
  has_many :variant_groups, through: :variant_group_variants
  has_and_belongs_to_many :variant_aliases
  has_and_belongs_to_many :variant_types
  has_and_belongs_to_many :clinvar_entries
  has_and_belongs_to_many :hgvs_descriptions
  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

  belongs_to :single_variant_molecular_profile,
    class_name: "MolecularProfile",
    foreign_key: :single_variant_molecular_profile_id

  has_one :deprecation_activity,
    as: :subject,
    class_name: 'DeprecateVariantActivity'
  has_one :deprecating_user, through: :deprecation_activity, source: :user

  has_one :creation_activity,
    as: :subject,
    class_name: 'CreateVariantActivity'
  has_one :creating_user, through: :creation_activity, source: :user

  enum :deprecation_reason, ['duplicate', 'invalid_variant', 'other', 'feature_deprecated']

  has_many :activities_linked_entities,
    ->() { where(entity_type: 'Variant') },
    foreign_key: :entity_id,
    class_name: 'ActivityLinkedEntity'
  has_many :activities, through: :activities_linked_entities

  has_one :deprecate_activity_link,
    ->() { where(entity_type: 'Variant').eager_load(:activity).where("activities.type = 'DeprecateVariantActivity'") },
    foreign_key: :entity_id,
    class_name: 'ActivityLinkedEntity'
  has_one :deprecate_activity, through: :deprecate_activity_link, source: :activity

  after_commit :reindex_mps
  after_create -> { MaterializedViews::VariantBrowseTableRow.refresh_async }

  validates :name, presence: true

  validate :unique_name_in_context
  validate :feature_type_matches_variant_type
  validate :correct_coordinate_type
  validates_with VariantFieldsValidator

  searchkick highlight: [:name, :aliases], callbacks: :async
  scope :search_import, -> { includes(:variant_aliases, :feature) }

  def self.valid_variant_coordinate_types
    []
  end

  def search_data
    {
      name: "#{feature.name} - #{name}",
      feature: feature.name,
      aliases: variant_aliases.map(&:name),
    }
  end

  def should_index?
    !deprecated
  end

  def link
    Rails.application.routes.url_helpers.url_for("/variants/#{self.id}")
  end

  #Name to be used when displayed as part of a Molecular Profile
  def mp_name
    name
  end

  def self.timepoint_query
    ->(x) {
      self.joins(molecular_profiles: [:evidence_items])
        .group('variants.id')
        .select('variants.id')
        .where("evidence_items.status != 'rejected'")
        .where("variants.deprecated = ?", false)
        .having('MIN(evidence_items.created_at) >= ?', x)
        .distinct
        .count
    }
  end

  def reindex_mps
    self.molecular_profiles.each { |mp| mp.reindex(mode: :async) }
  end

  def on_revision_accepted
    SetAlleleRegistryIdSingleVariant.perform_later(self) if Rails.env.production?
    update_single_variant_mp_aliases
  end

  def update_single_variant_mp_aliases
    svmp = self.single_variant_molecular_profile
    aliases = self.variant_aliases
    mp_aliases = aliases.map do |a|
      MolecularProfileAlias.where(name: a.name).first_or_create!
    end

    svmp.molecular_profile_aliases = mp_aliases
  end

  def correct_coordinate_type
    raise StandardError.new("Implement validation in subclass")
  end

  def unique_name_in_context
    base_query = self.class.where(
      deprecated: false,
      feature_id: feature_id,
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
      errors.add(:name, 'must be unique within a Feature')
    end
  end

  def feature_type_matches_variant_type
    unless self.is_a?(feature.compatible_variant_type)
      errors.add(:feature_id, "#{type} is not compatible with #{feature.feature_instance_type.demodulize} Features")
    end
  end

  def editable_fields
    unique_editable_fields + shared_editable_fields
  end

  def shared_editable_fields
    [
      :variant_type_ids,
      :variant_alias_ids,
    ]
  end

  def unique_editable_fields
    raise StandardError.new("Implement in Variant subclass")
  end

  def forbidden_fields
    []
  end

  def required_fields
    #Fields that this variant type _must_ have populated
    #(Excluding name and feature id, that is handled in the parent)
    raise StandardError.new("Implement in Variant subclass")
  end

  def self.known_subclasses
    [
      Variants::GeneVariant,
      Variants::FactorVariant,
      Variants::FusionVariant
    ]
  end
end
