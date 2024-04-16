class CreateFeatureActivity < Activity

  def feature
    self.subject
  end

  def generate_verbiage
    "created #{feature.feature_instance_type.demodulize}"
  end
end
