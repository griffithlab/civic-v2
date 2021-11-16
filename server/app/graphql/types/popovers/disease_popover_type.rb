module Types::Popovers
  class DiseasePopoverType < Types::Entities::DiseaseType
    field :assertion_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :variant_count, Int, null: false

    def assertion_count
      Assertion.where.not(status: 'rejected')
        .where(disease_id: object.id)
        .count
    end

    def evidence_item_count
      EvidenceItem.where.not(status: 'rejected')
        .where(disease_id: object.id)
        .count
    end

    def variant_count
      EvidenceItem
        .where.not(status: 'rejected')
        .where(disease_id: object.id)
        .select(:variant_id)
        .distinct
        .count
    end
  end
end

