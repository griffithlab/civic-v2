class DeprecateComplexMolecularProfileActivity < Activity
  def molecular_profile
    self.subject
  end

  def generate_verbiage
    "deprecated"
  end
end
