module Types::Activities
  class SuggestSourceActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :source_suggestion, Types::Entities::SourceSuggestionType, null: false

    def source_suggestion
      Loaders::AssociationLoader.for(SuggestSourceActivity, :linked_source_suggestion).load(object)
    end
  end
end
