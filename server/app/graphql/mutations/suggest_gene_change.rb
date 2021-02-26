class Mutations::SuggestGeneChange < Mutations::BaseMutation
  argument :id, Int, required: true
  argument :fields, Types::SuggestedChanges::GeneFields, required: true
  argument :organization_id, Int, required: false

  field :gene, Types::Entities::GeneType, null: false
  field :results, [Types::SuggestedChanges::SuggestedChangeResult], null: false

  def authorized?(organization_id: nil, **kwargs)
    #TODO this will apply very often, do we pull this out into a default "must be logged in" helper
    if context[:current_user].nil?
      raise GraphQL::ExecutionError, 'You must be logged in to perform that action.'
    elsif ! PolicyHelpers.can_act_for_org?( user: context[:current_user], organization_id: organization_id)
      raise GraphQL::ExecutionError, "User cannot suggest a change on behalf of organization ##{organization_id}" 
    else
      return true
    end
  end

  def resolve(fields:, id:, organization_id: nil)
    existing_gene = Gene.find_by(id: id)

    if existing_gene
      cmd = Actions::SuggestGeneChange.new(
        existing_obj: existing_gene,
        fields: fields,
        originating_user: context[:current_user],
        organization_id: organization_id
      )
      res = cmd.perform

      if res.succeeded?
        {
          gene: existing_gene,
          results: res.changes
        }
      else
        raise GraphQL::ExecutionError, res.errors.join(', ')
      end

    else
      raise GraphQL::ExecutionError, "Gene ID:#{gene.id} not found, cannot suggest change"
    end

  end
end





