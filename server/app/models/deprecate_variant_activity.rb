class DeprecateVariantActivity < Activity
  has_linked :comment

  has_many :molecular_profiles_link,
    ->() { where(entity_type: 'MolecularProfile') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_many :linked_molecular_profiles,
    through: :molecular_profiles_link,
    source: :entity,
    source_type: 'MolecularProfile'


  def variant
    self.subject
  end

  def molecular_profiles
    if activity_linked_entities.loaded?
      activity_linked_entities.select { |e| e.entity_type == 'MolecularProfile' }.entity
    else
      self.linked_molecular_profiles
    end
  end

  def generate_verbiage
    'deprecated variant'
  end
end
