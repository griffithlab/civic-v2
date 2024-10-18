class DeprecateVariantActivity < Activity
  has_many_linked :molecular_profiles

  def variant
    self.subject
  end

  def generate_verbiage
    'deprecated'
  end
end
