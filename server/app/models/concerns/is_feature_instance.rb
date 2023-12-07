module IsFeatureInstance
  extend ActiveSupport::Concern

  included do
    has_one :feature, as: :feature_instance, touch: true

    delegate :name, to: :feature
    delegate :description, to: :feature
    delegate :feature_aliases, to: :feature
    delegate :sources, to: :feature
    delegate :variants, to: :feature
  end
end
