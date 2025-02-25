module Types::Popovers
  class DiseasePopoverType < Types::Entities::DiseaseType
    field :assertion_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :molecular_profile_count, Int, null: false

    def assertion_count
      Assertion.where.not(status: "rejected")
        .where(disease_id: object.id)
        .count
    end

    def evidence_item_count
      EvidenceItem.where.not(status: "rejected")
        .where(disease_id: object.id)
        .count
    end

    def molecular_profile_count
      EvidenceItem
        .where.not(status: "rejected")
        .where(disease_id: object.id)
        .select(:molecular_profile_id)
        .distinct
        .count
    end
  end
end
