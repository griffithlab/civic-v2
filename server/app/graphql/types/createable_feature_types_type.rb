module Types
  class CreateableFeatureTypesType < Types::BaseEnum
    description 'Enum representing Feature types that can be user-created'
    value 'FACTOR', value: Features::Factor
  end
end
