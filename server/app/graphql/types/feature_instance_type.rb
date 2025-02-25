module Types
  class FeatureInstanceType < Types::BaseUnion
    description "The specific type of a feature instance"
    possible_types "Types::Entities::GeneType", "Types::Entities::FactorType", "Types::Entities::FusionType"

    def self.resolve_type(object, context)
      if object.is_a?(Features::Gene)
        Types::Entities::GeneType
      elsif object.is_a?(Features::Factor)
        Types::Entities::FactorType
      elsif object.is_a?(Features::Fusion)
        Types::Entities::FusionType
      else
        raise StandardError.new("Unknown feature instance type #{object.class}")
      end
    end
  end
end
