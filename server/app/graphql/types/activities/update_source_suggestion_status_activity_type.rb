module Types::Activities
  class UpdateSourceSuggestionStatusActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :source_suggestion, Types::Entities::SourceSuggestionType, null: false

    def source_suggestion
      Loaders::AssociationLoader.for(UpdateSourceSuggestionStatusActivity, :linked_source_suggestion).load(object)
    end
  end
end
