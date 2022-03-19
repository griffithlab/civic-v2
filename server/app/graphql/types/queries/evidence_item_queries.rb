module Types::Queries
  module EvidenceItemQueries
    def self.included(klass)
      klass.field :evidence_item, Types::Entities::EvidenceItemType, null: true do
        description "Find an evidence item by CIViC ID"
        argument :id, GraphQL::Types::Int, required: true
      end

      def evidence_item(id:)
        EvidenceItem.find_by(id: id)
      end
    end
  end
end
