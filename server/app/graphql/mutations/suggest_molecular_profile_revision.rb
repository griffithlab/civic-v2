class Mutations::SuggestMolecularProfileRevision < Mutations::MutationWithOrg
  description "Suggest a Revision to a MolecularProfile entity."

  argument :id, Int, required: true,
    description: "The ID of the MolecularProfile to suggest a Revision to."

  argument :fields, Types::Revisions::MolecularProfileFields, required: true,
    description: <<~DOC.strip
      The desired state of the Molecular Profile's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text describing the reason for the change. Will be attached to the Revision as a comment."

  field :molecular_profile, Types::Entities::MolecularProfileType, null: false,
    description: "The MolecularProfile the user has proposed a Revision to."

  field :results, [ Types::Revisions::RevisionResult ], null: false,
    description: <<~DOC.strip
      A list of Revisions generated as a result of this suggestion.
      If an existing Revision exactly matches the proposed one, it will be returned instead.
      This is indicated via the 'newlyCreated' Boolean.
      Revisions are stored on a per-field basis.
      The changesetId can be used to group Revisions proposed at the same time.
    DOC

  attr_reader :mp

  def ready?(organization_id: nil, id:, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    mp = MolecularProfile.find_by(id: id)
    if mp.nil?
      raise GraphQL::ExecutionError, "MolecularProfile with id #{id} doesn't exist."
    end

    @mp = mp

    existing_source_ids = Source.where(id: fields.source_ids).pluck(:id)
    if existing_source_ids.size != fields.source_ids.size
      raise GraphQL::ExecutionError, "Provided source ids: #{fields.source_ids.join(', ')} but only #{existing_source_ids.join(', ')} exist."
    end

    true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    updated_mp = InputAdaptors::MolecularProfileInputAdaptor.new(mp_input_object: fields, existing_name: mp.name).perform
    revised_objs = Activities::RevisedObjectPair.new(existing_obj: mp, updated_obj: updated_mp)

    cmd = Activities::SuggestRevisionSet.new(
      revised_objects: revised_objs,
      subject: mp,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        molecular_profile: mp,
        results: res.revision_results
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
