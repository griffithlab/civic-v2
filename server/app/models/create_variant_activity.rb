class CreateVariantActivity < Activity
  has_one_linked :molecular_profile

  def variant
    self.subject
  end

  def generate_verbiage
    "created"
  end
end
