require_relative '../linkable_tag.rb'

module Types::Revisions
  class ModeratedObjectField < Types::BaseObject
    field :id, Int, null: false
    field :display_name, String, null: true
    field :display_type, String, null: true
    field :entity_type, String, null: false
    field :link, String, null: true
    field :deleted, Boolean, null: false
    field :feature, Types::LinkableFeature, null: true
    field :deprecated, Boolean, null: true
    field :flagged, Boolean, null: true
  end

  class ScalarFieldType < Types::BaseObject
    field :value, String, null: true
  end

  class ObjectFieldType < Types::BaseObject
    field :objects, [Types::Revisions::ModeratedObjectField], null: false
  end

  class ModeratedFieldType < Types::BaseUnion
    description 'Fields that can have revisions can be either scalar values or complex objects'
    possible_types Types::Revisions::ScalarFieldType, Types::Revisions::ObjectFieldType

    def self.resolve_type(object, context)
      if object.has_key?(:objects)
        Types::Revisions::ObjectFieldType
      else
        Types::Revisions::ScalarFieldType
      end
    end
  end
end
