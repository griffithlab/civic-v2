module Types::Entities
  class FusionKnownPartnerGeneType < Types::BaseObject
    field :gene, Types::Entities::GeneType, null: false
    field :fusion, Types::Entities::FusionType, null: false
    field :know_partner_specific_fusion, Types::Entities::FusionType , null: true

    def gene
      Loaders::AssociationLoader.for(FusionsKnownPartnerGene, :gene).load(object)
    end

    def fusion
      Loaders::AssociationLoader.for(FusionsKnownPartnerGene, :fusion).load(object)
    end
  end
end
