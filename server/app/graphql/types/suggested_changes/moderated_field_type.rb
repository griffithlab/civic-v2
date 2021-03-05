module Types::SuggestedChanges
  class ModeratedObjectField < Types::BaseObject
    field :id, Int, null: false
    field :display_name, String, null: false
    field :display_type, String, null: false
    field :entity_type, String, null: false
  end

  class ScalarFieldType < Types::BaseObject
    field :value, String, null: true
  end

  class ObjectFieldType < Types::BaseObject
    field :objects, [Types::SuggestedChanges::ModeratedObjectField], null: false
  end

  class ModeratedFieldType < Types::BaseUnion
    description 'Fields that can have revisions can be either scalar values or complex objects'
    possible_types Types::SuggestedChanges::ScalarFieldType, Types::SuggestedChanges::ObjectFieldType

    def self.resolve_type(object, context)
      if object.has_key?(:objects)
        Types::SuggestedChanges::ObjectFieldType
      else
        Types::SuggestedChanges::ScalarFieldType
      end
    end
  end
end
