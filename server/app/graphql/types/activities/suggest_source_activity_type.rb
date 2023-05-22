module Types::Activities
  class SuggestSourceActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false
    field :source_suggestion, Types::Entities::SourceSuggestionType, null: false

    def comment
      Loaders::AssociationLoader.for(SuggestSourceActivity, :linked_comment).load(object)
    end

    def source_suggestion
      Loaders::AssociationLoader.for(SuggestSourceActivity, :linked_source_suggestion).load(object)
    end
  end
end
