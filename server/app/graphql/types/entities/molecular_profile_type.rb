module Types::Entities
  class MolecularProfileType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :raw_name, String, null: false, 
      description: 'The profile name as stored, with ids rather than names.'
    field :name, String, null: false,
      description: 'The human readable name of this profile, including gene and variant names.'
    field :parsed_name, [Types::MolecularProfile::MolecularProfileSegmentType], null: false, 
      description: 'The profile name with its constituent parts as objects, suitable for building tags.'
    field :variants, [Types::Entities::VariantType], null: false,
      description: 'The collection of variants included in this molecular profile. Please note the name for their relation to each other.'
    field :assertions, [Types::Entities::AssertionType], null: false,
      description: 'The collection of assertions associated with this molecular profile.'
    field :evidence_items, Types::Entities::EvidenceItemType.connection_type, null: false,
      description: 'The collection of evidence items associated with this molecular profile.'
    field :sources, [Types::Entities::SourceType], null: false
    field :description, String, null: true

    def raw_name
      object.name
    end

    def name
      object.display_name
    end

    def parsed_name
      object.segments
    end

    def variants
      Loaders::AssociationLoader.for(MolecularProfile, :variants).load(object)
    end

    def assertions
      Loaders::AssociationLoader.for(MolecularProfile, :assertions).load(object)
    end

    def evidence_items
      Loaders::AssociationLoader.for(MolecularProfile, :evidence_items).load(object)
    end

    def sources
      Loaders::AssociationLoader.for(MolecularProfile, :sources).load(object)
    end
  end
end
