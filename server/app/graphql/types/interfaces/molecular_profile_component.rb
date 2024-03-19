module Types::Interfaces
  module MolecularProfileComponent
    include Types::BaseInterface

    description <<~DOC
      A taggable/linkable component of a molecular profile
    DOC

    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false

    def name
      if object.respond_to?(:name)
        object.name
      else
        "#{object.class.to_s.first}ID#{object.id}"
      end
    end

    definition_methods do
      def resolve_type(object, context)
        case object
        when Feature
          Types::Entities::FeatureType
        when Variant
          Types::Interfaces::VariantInterface
        else
          raise "Unexpected MolecularProfileTag type: #{object.class}"
        end
      end
    end
  end
end
