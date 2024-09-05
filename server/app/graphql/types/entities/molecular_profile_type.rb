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
    field :variants, [Types::Interfaces::VariantInterface], null: false,
      description: 'The collection of variants included in this molecular profile. Please note the name for their relation to each other.'

    field :assertions, Types::Entities::AssertionType.connection_type, null: false do
      description 'The collection of assertions associated with this molecular profile.'
      argument :include_rejected, Boolean, required: false
    end

    field :evidence_items, Types::Entities::EvidenceItemType.connection_type, null: false do
      description 'The collection of evidence items associated with this molecular profile.'
      argument :include_rejected, Boolean, required: false
    end

    field :sources, [Types::Entities::SourceType], null: false
    field :description, String, null: true
    field :molecular_profile_aliases, [String], null: false
    field :deprecated, Boolean, null: false
    field :deprecation_reason, Types::MolecularProfileDeprecationReasonType, null: true
    field :deprecated_variants, [Types::Interfaces::VariantInterface], null: false
    field :variant_deprecation_activity, Types::Activities::DeprecateVariantActivityType, null: true
    field :complex_molecular_profile_deprecation_activity, Types::Activities::DeprecateComplexMolecularProfileActivityType, null: true
    field :molecular_profile_score, Float, null: false
    field :evidence_counts_by_status, Types::MolecularProfile::EvidenceItemsByStatusType, null: false
    field :evidence_counts_by_type, Types::MolecularProfile::EvidenceItemsByTypeType, null: false
    field :is_complex, Boolean, null: false
    field :is_multi_variant, Boolean, null: false
    field :variant_creation_activity, Types::Activities::CreateVariantActivityType, null: true
    field :complex_molecular_profile_creation_activity, Types::Activities::CreateComplexMolecularProfileActivityType, null: true

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

    def variants
      Loaders::AssociationLoader.for(MolecularProfile, :variants).load(object)
    end

    def deprecated_variants
      Loaders::AssociationLoader.for(MolecularProfile, :deprecated_variants).load(object)
    end

    def variant_deprecation_activity
      Loaders::AssociationLoader.for(MolecularProfile, :variant_deprecation_activity).load(object)
    end

    def complex_molecular_profile_deprecation_activity
      Loaders::AssociationLoader.for(MolecularProfile, :complex_molecular_profile_deprecation_activity).load(object)
    end

    def variant_creation_activity
      Loaders::AssociationLoader.for(MolecularProfile, :variant_creation_activity).load(object)
    end

    def complex_molecular_profile_creation_activity
      Loaders::AssociationLoader.for(MolecularProfile, :complex_molecular_profile_creation_activity).load(object)
    end

    def assertions(include_rejected: false)
      if include_rejected
        Loaders::AssociationLoader.for(MolecularProfile, :assertions).load(object)
      else
        Loaders::AssociationLoader.for(MolecularProfile, :submitted_and_accepted_assertions).load(object)
      end
    end

    def evidence_items(include_rejected: false)
      if include_rejected
        Loaders::AssociationLoader.for(MolecularProfile, :evidence_items).load(object)
      else
        Loaders::AssociationLoader.for(MolecularProfile, :submitted_and_accepted_evidence_items).load(object)
      end
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

    def evidence_counts_by_type
      Loaders::AssociationLoader.for(MolecularProfile, :evidence_items_by_type).load(object).then do |type|
        if type
          type
        else
          {
            molecular_profile_id: object.id,
            diagnostic_count: 0,
            prognostic_count: 0,
            predictive_count: 0,
            predisposing_count: 0,
            functional_count: 0,
            oncogenic_count: 0
          }
        end
      end
    end
    
    def is_multi_variant
      Loaders::AssociationCountLoader.for(MolecularProfile, association: :variants).load(object.id).then do |count|
        count > 1
      end
    end

    def is_complex
      Loaders::AssociationCountLoader.for(MolecularProfile, association: :variants).load(object.id).then do |count|
        if count > 1
          true
        else
          object.name.include? "NOT"
        end
      end
    end
  end
end
