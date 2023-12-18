class Feature < ApplicationRecord
  include Flaggable
  include Commentable
  include Subscribable

  delegated_type :feature_instance, types: %w[ Features::Gene ]
  has_and_belongs_to_many :feature_aliases, class_name: 'Features::FeatureAlias'
  has_and_belongs_to_many :sources

  has_many :variants

  def link
    Rails.application.routes.url_helpers.url_for("/features/#{self.id}")
  end
end
