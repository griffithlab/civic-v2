module Types::Entities
  class SpecificationType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :specification_type, Types::Entities::SpecificationTypeType, null: false
    field :assertion_type, Types::AssertionTypeType, null: false
    field :version, String, null: false
    field :specification_url, String, null: false
    field :sop_pubmed_id, Int, null: false
    field :published_on, GraphQL::Types::ISO8601Date, null: false
    field :organization, Types::Entities::OrganizationType, null: true
    field :organization_id, Int, null: true
    field :specification_criterium, [ Types::Entities::SpecificationCriteriumType ], null: false

    def organization
      Loaders::AssociationLoader.for(Specification, :organization).load(object)
    end

    def specification_criterium
      Loaders::AssociationLoader.for(Specification, :specification_criterium).load(object)
    end
  end
end
