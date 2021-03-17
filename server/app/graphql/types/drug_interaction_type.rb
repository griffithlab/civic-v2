module Types
  class DrugInteractionType < Types::BaseEnum
    value 'COMBINATION', value: 'Combination'
    value 'SEQUENTIAL', value: 'Sequential'
    value 'SUBSTITUTES', value: 'Substitutes'
  end
end
