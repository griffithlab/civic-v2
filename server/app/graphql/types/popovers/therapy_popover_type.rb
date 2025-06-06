module Types::Popovers
  class TherapyPopoverType < Types::Entities::TherapyType
    field :assertion_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :molecular_profile_count, Int, null: false

    def assertion_count
      Therapy.where(id: object.id)
        .joins(:assertions)
        .select("assertions.id")
        .where("assertions.status != 'rejected'")
        .distinct
        .count
    end

    def evidence_item_count
      Therapy.where(id: object.id)
        .joins(:evidence_items)
        .where("evidence_items.status != 'rejected'")
        .select("evidence_items.id")
        .distinct
        .count
    end

    def molecular_profile_count
      Therapy.where(id: object.id)
        .joins(:evidence_items)
        .where("evidence_items.status != 'rejected'")
        .select("evidence_items.molecular_profile_id")
        .distinct
        .count
    end
  end
end
