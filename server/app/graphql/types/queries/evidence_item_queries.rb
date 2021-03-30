module Types::Queries
  module EvidenceItemQueries
    def self.included(klass)
      klass.field :evidence_item, Types::Entities::EvidenceItemType, null: true do
        argument :id, GraphQL::Types::ID, required: true
      end

      def evidence_item(id:)
        EvidenceItem.find(id)
      end
    end
  end
end
