class CreateComplexMolecularProfileActivity < Activity
  def molecular_profile
    self.subject
  end

  def generate_verbiage
    "created"
  end
end
