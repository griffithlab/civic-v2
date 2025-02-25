class Mutations::AddRemoteCitation < Mutations::BaseMutation
  description <<~DOC
    Add a stub record for an external source that is not yet in CIViC.
    This is for adding a new Source inline while performing other curation activities
    such as adding new evidence items and is distinct from suggesting a source for curation.
  DOC

  argument :citation_id, GraphQL::Types::String, required: true,
    description: "The external id for the source to add."
  argument :source_type, Types::SourceSourceType, required: true,
    description: "The origin of the external source."

  field :new_source, Types::Entities::SourceStubType, null: false,
    description: "The stubbed in record for the newly created source."

  def ready?(citation_id:, source_type:)
    validate_user_logged_in
    true
  end

  def resolve(citation_id:, source_type:)
    new_source = Source.where(
      citation_id: citation_id,
      source_type: source_type
    ).first_or_create!

    FetchSourceData.perform_later(new_source)

    { new_source: new_source }
  end
end
