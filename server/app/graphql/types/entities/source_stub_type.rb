module Types::Entities
  class SourceStubType < Types::BaseObject
    field :id, Int, null: false
    field :citation_id, Int, null: false
    field :source_type, Types::SourceSourceType, null: false
  end
end
