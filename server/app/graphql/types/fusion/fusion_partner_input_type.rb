module Types::Fusion
  class FusionPartnerInputType < Types::BaseInputObject
    description "The fusion partner's status and gene ID (if applicable)"

    argument :partner_status, Types::Fusion::FusionPartnerStatus, required: true,
      description: "The status of the fusion partner"
    argument :gene_id, Int, required: false,
      description: "The CIViC ID of the Gene Feature that is the Fusion partner, if known"
  end
end
