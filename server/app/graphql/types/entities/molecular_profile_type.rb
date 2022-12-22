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
    field :molecular_profile_aliases, [String], null: false
    field :deprecated, Boolean, null: false
    field :deprecated_variants, [Types::Entities::VariantType], null: false
    field :deprecation_event, Types::Entities::EventType, null: true
    field :molecular_profile_score, Float, null: false
    field :evidence_counts_by_status, Types::MolecularProfile::EvidenceItemsByStatusType, null: false

    def raw_name
      object.name
    end

    def molecular_profile_score
      object.evidence_score
    end

    def name
      Loaders::MolecularProfileSegmentsLoader.for(MolecularProfile).load(object.id).then do |segments|
        segments.map { |s| s.respond_to?(:name) ? s.name : s }.join(' ')
      end
    end

    def parsed_name
      Loaders::MolecularProfileSegmentsLoader.for(MolecularProfile).load(object.id)
    end

    def variant
      Loaders::AssociationLoader.for(MolecularProfile, :variants).load(object)
    end

    def deprecated_variant
      Loaders::AssociationLoader.for(MolecularProfile, :deprecated_variants).load(object)
    end

    def deprecation_event
      Loaders::AssociationLoader.for(MolecularProfile, :deprecation_event).load(object)
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

    def molecular_profile_aliases
      Loaders::AssociationLoader.for(MolecularProfile, :molecular_profile_aliases).load(object).then do |a|
        a.map(&:name)
      end
    end

    def evidence_counts_by_status
      Loaders::AssociationLoader.for(MolecularProfile, :evidence_items_by_status).load(object).then do |status|
        if status
          status
        else
          {
            molecular_profile_id: object.id,
            accepted_count: 0,
            rejected_count: 0,
            submitted_count: 0,
          }
        end
      end
    end
  end
end
