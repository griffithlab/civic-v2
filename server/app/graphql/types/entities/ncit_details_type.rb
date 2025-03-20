module Types::Entities
  class NcitSynonym < Types::BaseObject
    field :name, String, null: false
    field :source, String, null: false
  end

  class NcitDefinition < Types::BaseObject
    field :definition, String, null: false
    field :source, String, null: false
  end

  class NcitDetailsType < Types::BaseObject
    field :synonyms, [ NcitSynonym ], null: false
    field :definitions, [ NcitDefinition ], null: false
  end
end
