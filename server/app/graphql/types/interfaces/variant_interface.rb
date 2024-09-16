module Types::Interfaces
  module VariantInterface
    include Types::BaseInterface
    connection_type_class Types::Connections::VariantsConnection

    #TODO: Remove Me
    orphan_types Types::Variants::FusionVariantType

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::MolecularProfileComponent

    field :id, Int, null: false
    field :name, String, null: false
    field :feature, Types::Entities::FeatureType, null: false
    field :variant_types, [Types::Entities::VariantTypeType], null: false
    field :link, String, null: false
    field :variant_aliases, [String], null: false
    field :single_variant_molecular_profile, Types::Entities::MolecularProfileType, null: false
    field :single_variant_molecular_profile_id, Int, null: false
    field :deprecation_activity, Types::Activities::DeprecateVariantActivityType, null: true
    field :deprecated, Boolean, null: false
    field :deprecation_reason, Types::VariantDeprecationReasonType, null: true
    field :creation_activity, Types::Activities::CreateVariantActivityType, null: true #TODO: should try to make this non-nullable if complete backfill is possible
    field :molecular_profiles, Types::Entities::MolecularProfileType.connection_type, null: false

    def feature
      Loaders::AssociationLoader.for(Variant, :feature).load(object)
    end

    def variant_types
      Loaders::AssociationLoader.for(Variant, :variant_types).load(object)
    end

    def molecular_profiles
      Loaders::AssociationLoader.for(Variant, :molecular_profiles).load(object)
    end

    def single_variant_molecular_profile
      Loaders::AssociationLoader.for(Variant, :single_variant_molecular_profile).load(object)
    end

    def deprecation_activity
      Loaders::AssociationLoader.for(Variant, :deprecation_activity).load(object)
    end

    def creation_activity
      Loaders::AssociationLoader.for(Variant, :creation_activity).load(object)
    end

    def variant_aliases
      Loaders::AssociationLoader.for(Variant, :variant_aliases).load(object).then do |va|
        va.map(&:name)
      end
    end

    definition_methods do
      def resolve_type(object, context)
        case object
        when Variants::GeneVariant
          Types::Variants::GeneVariantType
        when Variants::FactorVariant
          Types::Variants::FactorVariantType
        when Variants::FusionVariant
          Types::Variants::FusionVariantType
        else
          raise "Unexpected Variant type #{object.class}"
        end
      end
    end
  end
end
