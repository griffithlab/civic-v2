module IsFeatureInstance
  extend ActiveSupport::Concern

  included do
    has_one :feature, as: :feature_instance, touch: true, autosave: true, inverse_of: :feature_instance

    delegate_missing_to :feature

    # Name to be used when displayed as part of a Molecular Profile
    def mp_name
      name
    end

    # What variant type can be attached to this feature
    def compatible_variant_type
      raise StandardError.new("Must implement in FeatureInstance type")
    end
  end
end
