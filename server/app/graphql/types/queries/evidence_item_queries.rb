module Types::Queries
  module EvidenceItemQueries
    def self.included(klass)
      klass.field :evidence_item, Types::Entities::EvidenceItemType, null: true do
        argument :evidence_item_id, GraphQL::Types::Int, required: true
      end

      def evidence_item(evidence_item_id:)
        EvidenceItem.find(evidence_item_id)
      end
    end
  end
end
