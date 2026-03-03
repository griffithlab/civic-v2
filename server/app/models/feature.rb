class Feature < ApplicationRecord
  include Flaggable
  include Commentable
  include Moderated
  include Subscribable
  include WithTimepointCounts

  delegated_type :feature_instance, types: %w[ Features::Gene Features::Factor Features::Fusion Features::Region], autosave: true
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

  def should_index?
    !deprecated
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

  def can_deprecate?
    if deprecated?
      return [ false, "Feature is already deprecated" ]
    end

    mps_with_eids = []
    mps_with_assertions = []

    self.variants.includes(:molecular_profiles).flat_map(&:molecular_profiles).each do |mp|
      if mp.evidence_items.where("evidence_items.status != 'rejected'").count > 0
        mps_with_eids.append(mp.id)
      end
      if mp.assertions.where("assertions.status != 'rejected'").count > 0
        mps_with_assertions.append(mp.id)
      end
    end
    if mps_with_assertions.size > 0 && mps_with_eids.size > 0
      return [ false, "Feature is linked to Variants that belong to Molecular Profiles with accepted or submitted Assertions and Evidence Items: AIDs:#{mps_with_assertions.join(', ')}, EIDs:#{mps_with_eids.join(', ')}. Move them to a different Molecular Profile and try again." ]
    elsif mps_with_assertions.size > 0
      return [ false, "Feature is linked to Variants that belong to Molecular Profiles with accepted or submitted Assertions: #{mps_with_assertions.join(', ')}. Move their Assertions to a different Molecular Profile and try again." ]
    elsif mps_with_eids.size > 0
      return [ false, "Feature is linked to Variants that belong to Molecular Profiles with accepted or submitted Evidence Items: #{mps_with_eids.join(', ')}. Move their Evidence Items to a different Molecular Profile and try again." ]
    end
    return [ true, nil ]
  end

  def stats
    Rails.cache.fetch("feature_stats_#{self.id}", expires_in: 24.hours) do
      v = MaterializedViews::FeatureBrowseTableRow.find_by(id: self.id)
      stats = {
        variant_count: v&.variant_count || 0,
        molecular_profile_count: v&.molecular_profile_count || 0,
        evidence_item_count: v&.evidence_item_count || 0,
        assertion_count: v&.assertion_count || 0,
      }
    end
  end

  def clinical_significance_counts
    Rails.cache.fetch("feature_clinical_significant_counts_#{self.id}", expires_in: 24.hours) do
      counts = Assertion
        .joins(molecular_profile: [ variants: [ :feature ] ])
        .where(features: { id: self.id }, molecular_profiles: { deprecated: false }, variants: { deprecated: false })
        .where.not(assertions: { status: 'rejected' })
        .group_by{ |a| [a.assertion_type, a.assertion_direction, a.significance] }
      if counts.nil?
        []
      else
        counts.map{ |c| { type: c.first.first, direction: c.first.second, significance: c.first.third, assertions: c.second, count: c.second.count } }
      end
    end
  end

  def detailed_clinical_significance_counts
    Rails.cache.fetch("feature_detailed_clinical_significant_counts_#{self.id}", expires_in: 24.hours) do
      counts = Assertion
        .joins(:disease, molecular_profile: [ variants: [ :feature ] ])
        #.left_joins(:therapies)
        .where(features: { id: self.id }, molecular_profiles: { deprecated: false }, variants: { deprecated: false })
        .where.not(assertions: { status: 'rejected' })
        #.group_by{ |a| [a.assertion_type, a.assertion_direction, a.significance, a.disease, a.therapies.map{|t| t.id}, a.therapy_interaction_type] }
        .group_by{ |a| [a.assertion_type, a.assertion_direction, a.significance, a.disease_id] }
      if counts.nil?
        []
      else
        counts.map do |c|
          props = c.first
          assertions = c.second.uniq
          {
            type: props[0],
            direction: props[1],
            significance: props[2],
            disease: assertions.first.disease,
            #therapies: assertions.first.therapies,
            #therapy_interaction_type: props[5],
            assertions: assertions,
            count: assertions.count
          }
        end
      end
    end
  end
end
