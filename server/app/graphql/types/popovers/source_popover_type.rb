module Types::Popovers
  class SourcePopoverType < Types::Entities::SourceType
    field :evidence_item_count, Int, null: false

    def evidence_item_count
      Source.where(id: object.id)
        .joins(:evidence_items)
        .where("evidence_items.status != 'rejected'")
        .select("evidence_items.id")
        .distinct
        .count
    end
  end
end
