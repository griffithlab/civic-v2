module IsFeatureInstance
  extend ActiveSupport::Concern

  included do
    has_one :feature, as: :feature_instance, touch: true, autosave: true

    delegate_missing_to :feature
  end
end
