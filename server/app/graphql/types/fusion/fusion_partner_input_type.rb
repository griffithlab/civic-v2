module Types::Fusion
  class FusionPartnerInputType < Types::BaseInputObject
    description "The fusion partner's status and gene ID (if applicable)"

    argument :partner_status, Types::Fusion::FusionPartnerStatus, required: true,
      description: 'The status of the fusion partner'
    argument :gene_id, Int, required: false,
      description: 'The CIViC gene ID of the partner, if known'
    argument :regulatory_fusion_type, Types::Fusion::RegulatoryFusionTypeType, required: false,
      description: "If the fusion partner status is set to regulatory, what type of regulatory fusion is it?"
  end
end
