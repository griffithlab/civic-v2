class Feature < ApplicationRecord
  include Flaggable
  include Commentable
  include Moderated
  include Subscribable
  include WithTimepointCounts

  delegated_type :feature_instance, types: %w[ Features::Gene Features::Factor ], touch: true, autosave: true
  has_and_belongs_to_many :feature_aliases
  has_and_belongs_to_many :sources

  has_one :deprecation_activity,
    as: :subject,
    class_name: 'DeprecateFeatureActivity'
  has_one :deprecating_user, through: :deprecation_activity, source: :user

  has_one :creation_activity,
    as: :subject,
    class_name: 'CreateFeatureActivity'
  has_one :creating_user, through: :creation_activity, source: :user

  enum deprecation_reason: ['duplicate', 'invalid_feature', 'other']

  has_many :variants

  searchkick highlight: [:name, :aliases, :feature_type], callbacks: :async
  scope :search_import, -> { includes(:feature_aliases) }

#  validates :name, uniqueness: { scope: :feature_instance_type }

  def search_data
    {
      name: name,
      aliases: feature_aliases.map(&:name),
      feature_type: feature_instance_type.demodulize
    }
  end


  def link
    Rails.application.routes.url_helpers.url_for("/features/#{self.id}")
  end

  def self.timepoint_query
    ->(x) {
      self.joins(variants: { molecular_profiles: [:evidence_items] })
        .group('features.id')
        .select('features.id')
        .where("evidence_items.status != 'rejected'")
        .having('MIN(evidence_items.created_at) >= ?', x)
        .distinct
        .count
    }
  end
end
