class Feature < ApplicationRecord
  include Flaggable
  include Commentable
  include Moderated
  include Subscribable
  include WithTimepointCounts

  delegated_type :feature_instance, types: %w[ Features::Gene Features::Factor Features::Fusion ], autosave: true
  has_and_belongs_to_many :feature_aliases
  has_and_belongs_to_many :sources

  has_one :deprecation_activity,
    as: :subject,
    class_name: "DeprecateFeatureActivity"
  has_one :deprecating_user, through: :deprecation_activity, source: :user

  has_one :creation_activity,
    as: :subject,
    class_name: "CreateFeatureActivity"
  has_one :creating_user, through: :creation_activity, source: :user

  enum :deprecation_reason, [ "duplicate", "invalid_feature", "other" ]

  has_many :variants

  searchkick highlight: [ :name, :aliases, :feature_type ], callbacks: :async
  scope :search_import, -> { includes(:feature_aliases) }

  validate :unique_name_in_context

  def unique_name_in_context
    base_query = self.class.where(
      deprecated: false,
      feature_instance_type: feature_instance_type,
      name: name
    )

    duplicate_name = if in_revision_validation_context
                       base_query
                         # In the `in_revision_validation_context`, the revision target is the feature instance, not the feature
                         .where.not(feature_instance_id: revision_target_id)
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
      errors.add(:name, "must be unique within a Feature Instance Type")
    end
  end

  def search_data
    aliases = feature_aliases.map(&:name)
    if feature_instance.is_a?(Features::Factor)
      aliases << self.full_name
    end

    {
      name: name,
      aliases: aliases,
      feature_type: feature_instance_type.demodulize,
    }
  end

  # Name to be used when displayed as part of a Molecular Profile
  def mp_name
    feature_instance.mp_name
  end

  def link
    Rails.application.routes.url_helpers.url_for("/features/#{self.id}")
  end

  def compatible_variant_type
    feature_instance.compatible_variant_type
  end

  def self.timepoint_query
    ->(x) {
      self.joins(variants: { molecular_profiles: [ :evidence_items ] })
        .group("features.id")
        .select("features.id")
        .where("evidence_items.status != 'rejected'")
        .having("MIN(evidence_items.created_at) >= ?", x)
        .distinct
        .count
    }
  end
end
