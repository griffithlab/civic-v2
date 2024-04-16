class DeprecateFeatureActivity < Activity
  has_many_linked :molecular_profiles
  has_many_linked :variants

  def feature
    self.subject
  end

  def generate_verbiage
    "deprecated #{feature.feature_instance_type.demodulize}"
  end
end
