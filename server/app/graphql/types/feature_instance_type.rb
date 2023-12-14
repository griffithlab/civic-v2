module Types
  class FeatureInstanceType < Types::BaseUnion
    description 'The specific type of a feature instance'
    possible_types "Types::Entities::GeneType"

    def self.resolve_type(object, context)
      if object.is_a?(Features::Gene)
        Types::Entities::GeneType
      else
        raise StandardError.new("Unknown feature instance type #{object.class}")
      end
    end
  end
end
