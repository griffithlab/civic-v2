module Types::Entities
  class MolecularProfileType < Types::BaseObject
    field :id, Int, null: false
    field :raw_name, String, null: false, 
      description: 'The profile name as stored, with ids rather than names.'
    field :name, String, null: false,
      description: 'The humman readable name of this profile, including gene and variant names.'
    field :parsed_name, [Types::MolecularProfile::MolecularProfileSegmentType], null: false, 
      description: 'The profile name with its constituent parts as objects, suitable for building tags.'

    def raw_name
      object.name
    end

    def name
      object.display_name
    end

    def parsed_name
      object.segments
    end
  end
end
