class CreateFeatureActivity < Activity
  def feature
    self.subject
  end

  def generate_verbiage
    "created"
  end
end
