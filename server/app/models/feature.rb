class Feature < ApplicationRecord
  include Flaggable
  include Commentable
  include Moderated
  include Subscribable
  include WithTimepointCounts

  delegated_type :feature_instance, types: %w[ Features::Gene ]
  has_and_belongs_to_many :feature_aliases, class_name: 'Features::FeatureAlias'
  has_and_belongs_to_many :sources

  has_many :variants

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
