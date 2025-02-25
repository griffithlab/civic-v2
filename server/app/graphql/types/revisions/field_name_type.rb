module Types::Revisions
  class FieldNameType < Types::BaseObject
    field :name, String, null: false,
      description: "The internal server representation of the field name."
    field :display_name, String, null: false,
      description: "The user facing representation of the field name."
  end
end
