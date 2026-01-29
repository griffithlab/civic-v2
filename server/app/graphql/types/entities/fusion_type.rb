module Types::Entities
  class FusionType < Types::Entities::FeatureType
    field :five_prime_gene, Types::Entities::GeneType, null: true
    field :three_prime_gene, Types::Entities::GeneType, null: true
    field :known_partner_genes, [ Types::Entities::GeneType ], null: false

    field :five_prime_partner_status, Types::Fusion::FusionPartnerStatus, null: false
    field :three_prime_partner_status, Types::Fusion::FusionPartnerStatus, null: false

    def five_prime_gene
      Loaders::AssociationLoader.for(Features::Fusion, :five_prime_gene).load(object)
    end

    def three_prime_gene
      Loaders::AssociationLoader.for(Features::Fusion, :three_prime_gene).load(object)
    end

    def known_partner_genes
      Loaders::AssociationLoader.for(Features::Fusion, :known_partner_genes).load(object)
    end
  end
end
