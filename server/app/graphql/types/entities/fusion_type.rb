module Types::Entities
  class FusionType < Types::Entities::FeatureType

    field :five_prime_gene, Types::Entities::GeneType, null: true
    field :three_prime_gene, Types::Entities::GeneType, null: true

    field :five_prime_partner_status, Types::Fusion::FusionPartnerStatus, null: false
    field :three_prime_partner_status, Types::Fusion::FusionPartnerStatus, null: false

    field :regulatory_fusion_type, Types::Fusion::RegulatoryFusionTypeType, null: true

    def five_prime_gene
      Loaders::AssociationLoader.for(Features::Fusion, :five_prime_gene).load(object)
    end

    def three_prime_gene
      Loaders::AssociationLoader.for(Features::Fusion, :three_prime_gene).load(object)
    end
  end
end
