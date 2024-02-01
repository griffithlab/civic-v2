class DeprecateFeatureActivity < Activity

  def feature
    self.subject
  end

  def generate_verbiage
    "deprecated #{feature.feature_instance_type.demodulize}"
  end
end
