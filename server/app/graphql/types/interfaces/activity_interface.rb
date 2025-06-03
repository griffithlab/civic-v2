module Types::Interfaces
  module ActivityInterface
    include Types::BaseInterface
    connection_type_class Types::Connections::ActivitiesConnection

    description "An activity done by a curator or editor"

    field :id, Int, null: false
    field :verbiage, String, null: false
    field :note, String, null: true
    field :parsed_note, [ Types::Commentable::CommentBodySegment ], null: false
    field :events, [ Types::Entities::EventType ], null: false
    field :subject, Types::Interfaces::EventSubject, null: false
    field :user, Types::Entities::UserType, null: false
    field :organization, Types::Entities::OrganizationType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false

    def user
      Loaders::AssociationLoader.for(Activity, :user).load(object)
    end

    def organization
      Loaders::AssociationLoader.for(Activity, :organization).load(object)
    end

    def events
      Loaders::AssociationLoader.for(Activity, :events).load(object)
    end

    def subject
      Loaders::AssociationLoader.for(Activity, :subject).load(object)
    end

    def parsed_note
      Rails.cache.fetch(hash_key_from_object(object)) do
        Actions::FormatCommentText.get_segments(text: object.note)
      end
    end

    def hash_key_from_object(object)
      "segments_#{object.class}_#{object.id}_#{object.updated_at}"
    end

    orphan_types(
      Types::Activities::FlagEntityActivityType,
      Types::Activities::ResolveFlagActivityType,
      Types::Activities::SubmitEvidenceItemActivityType,
      Types::Activities::SubmitAssertionActivityType,
      Types::Activities::ModerateAssertionActivityType,
      Types::Activities::ModerateEvidenceItemActivityType,
      Types::Activities::DeprecateVariantActivityType,
      Types::Activities::SuggestSourceActivityType,
      Types::Activities::CommentActivityType,
      Types::Activities::SuggestRevisionSetActivityType,
      Types::Activities::UpdateSourceSuggestionStatusActivityType,
      Types::Activities::RejectRevisionsActivityType,
      Types::Activities::AcceptRevisionsActivityType,
      Types::Activities::CreateVariantActivityType,
      Types::Activities::DeprecateComplexMolecularProfileActivityType,
      Types::Activities::CreateComplexMolecularProfileActivityType,
      Types::Activities::CreateFeatureActivityType,
      Types::Activities::DeprecateFeatureActivityType,
      Types::Activities::DeleteCommentActivityType,
      Types::Activities::EndorseAssertionActivityType,
      Types::Activities::RevokeEndorsementActivityType
    )

    definition_methods do
      def resolve_type(object, context)
        case object
        when FlagEntityActivity
          Types::Activities::FlagEntityActivityType
        when ResolveFlagActivity
          Types::Activities::ResolveFlagActivityType
        when SubmitEvidenceItemActivity
          Types::Activities::SubmitEvidenceItemActivityType
        when ModerateEvidenceItemActivity
          Types::Activities::ModerateEvidenceItemActivityType
        when SubmitAssertionActivity
          Types::Activities::SubmitAssertionActivityType
        when ModerateAssertionActivity
          Types::Activities::ModerateAssertionActivityType
        when DeprecateVariantActivity
          Types::Activities::DeprecateVariantActivityType
        when SuggestSourceActivity
          Types::Activities::SuggestSourceActivityType
        when CommentActivity
          Types::Activities::CommentActivityType
        when SuggestRevisionSetActivity
          Types::Activities::SuggestRevisionSetActivityType
        when UpdateSourceSuggestionStatusActivity
          Types::Activities::UpdateSourceSuggestionStatusActivityType
        when RejectRevisionsActivity
          Types::Activities::RejectRevisionsActivityType
        when AcceptRevisionsActivity
          Types::Activities::AcceptRevisionsActivityType
        when CreateVariantActivity
          Types::Activities::CreateVariantActivityType
        when DeprecateComplexMolecularProfileActivity
          Types::Activities::DeprecateComplexMolecularProfileActivityType
        when CreateComplexMolecularProfileActivity
          Types::Activities::CreateComplexMolecularProfileActivityType
        when CreateFeatureActivity
          Types::Activities::CreateFeatureActivityType
        when DeprecateFeatureActivity
          Types::Activities::DeprecateFeatureActivityType
        when DeleteCommentActivity
          Types::Activities::DeleteCommentActivityType
        when EndorseAssertionActivity
          Types::Activities::EndorseAssertionActivityType
        when RevokeEndorsementActivity
          Types::Activities::RevokeEndorsementActivityType
        else
          raise "Unexpected Activity type #{object.class}"
        end
      end
    end
  end
end
