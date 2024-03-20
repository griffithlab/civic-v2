module IsFeatureInstance
  extend ActiveSupport::Concern

  included do
    has_one :feature, as: :feature_instance, touch: true, autosave: true

    delegate_missing_to :feature

    #What variant type can be attached to this feature
    def compatible_variant_type
      raise StandardError.new("Must implement in FeatureInstance type")
    end
  end
end
