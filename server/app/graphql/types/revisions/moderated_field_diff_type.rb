module Types::Revisions
  class ObjectFieldDiffType < Types::BaseObject
    field :current_objects, [Types::Revisions::ModeratedObjectField], null: false
    field :added_objects, [Types::Revisions::ModeratedObjectField], null: false
    field :removed_objects, [Types::Revisions::ModeratedObjectField], null: false
    field :kept_objects, [Types::Revisions::ModeratedObjectField], null: false
    field :suggested_objects, [Types::Revisions::ModeratedObjectField], null: false
  end

  class ModeratedFieldDiffType < Types::BaseUnion
    description 'Fields that can have revisions can be either scalar values or complex objects'
    possible_types Types::Revisions::ScalarFieldType, Types::Revisions::ObjectFieldDiffType

    def self.resolve_type(object, context)
      if object.has_key?(:added_objects)
        Types::Revisions::ObjectFieldDiffType
      else
        Types::Revisions::ScalarFieldType
      end
    end
  end
end
