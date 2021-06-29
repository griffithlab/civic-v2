module Types::Interfaces
  module EventSubject
    include Types::BaseInterface

    description 'The subject of an event log event.'

    field :id, Int, null: false
    field :name, String, null: false

    field :events, resolver: Resolvers::Events

    definition_methods do
      def resolve_type(object, context)
        case object
        when Gene
          Types::Entities::GeneType
        when Variant
          Types::Entities::VariantType
        when EvidenceItem
          Types::Entities::EvidenceItemType
        when Assertion
          Types::Entities::AssertionType
        else
          raise "Unexpected EventSubject type: #{object.class}"
        end
      end
    end
  end
end
