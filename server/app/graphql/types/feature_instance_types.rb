module Types
  class FeatureInstanceTypes < Types::BaseEnum
    value "GENE", value: "Features::Gene"
    value "FACTOR", value: "Features::Factor"
    value "FUSION", value: "Features::Fusion"
    value "REGION", value: "Features::Region"
  end
end
