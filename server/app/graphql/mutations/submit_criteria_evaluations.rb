class Mutations::SubmitCriteriaEvaluations < Mutations::MutationWithOrg
  description "Propose adding SpecificationEvaluations for a certain Specification to the CIViC database."

  argument :fields, Types::Revisions::AssertionSpecificationFields, required: true,
    description: <<~DOC.strip
      The desired Specification, its SpecificationCriteria and the evaluation fields for each.
    DOC

  #do we need a comment?

  field :specification_evaluations, [ Types::Entities::SpecificationEvaluationType ], null: false,
    description: "The newly created SpecificationEvaluations"


  def ready?(organization_id: nil, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    input_errors = []

    assertion = Assertion.find(fields.assertion_id)
    if assertion.nil?
      input_errors.append("Assertion with ID #{fields.assertion_id} doesn't exist")
    end

    specification = Specification.find(fields.specification_id)
    if specification.nil?
      input_errors.append("Specification with ID #{fields.specification_id} doesn't exist")
    end

    criteria = specification.specification_criterium
    expected_criteria = criteria.map{|c| c.criterium}
    provided_criteria = fields.evaluations.map{|e| e.specification_criterium}
    met_criteria = fields.evaluations.select{|c| c.evaluation == "met"}

    # specification is valid for assertion type
    if specification.assertion_type != assertion.assertion_type
      input_errors.append("The Specification's assertion_type #{specification.assertion_type} doesn't match the Assertion's assertion_type #{assertion.assertion_type}")
    end

    # existing evaluations needs to be of a specification with the same name
    if assertion.specifications.first.name != specification.name
      input_errors.append("This assertion already has specification evaluations for a specification with a different name")
    end

    # evaluations include all criteria of the selected specification
    missing_criteria = expected_criteria - provided_criteria
    extra_criteria = provided_criteria - expected_criteria
    if missing_criteria.any?
      input_errors.append("Evaluations missing for some of the Specification's criteria: #{missing_criteria.join(', ')}")
    end
    if extra_criteria.any?
      input_errors.append("Evaluations include extra criteria not available for the selected Specification: #{extra_criteria.join(', ')}")
    end

    fields.evaluations.each do |evaluation|
      if evaluation.evaluation == "met"
        #no op
      elsif evaluation.evaluation == "not_met"
        # for not_met evaluations: no modifier
        if evaluation.modifier.present?
          input_errors.append("Evaluation is not_met but modifier provided")
        end
      elsif evaluation.evaluation == "excluded"
        # for excluded evaluations: no modifier, eids
        if evaluation.modifier.present?
          input_errors.append("Evaluation is excluded but modifier provided")
        end
        if evaluation.evidence_item_ids.any?
          input_errors.append("Evaluation is excluded but evidence item IDs provided")
        end
      elsif evaluation.evaluation == "not_evaluated"
        # for not evaluated evaluations: no modifier, justification, eids
        if evaluation.modifier.present?
          input_errors.append("Evaluation is not_evaluated but modifier provided")
        end
        if evaluation.justification.present?
          input_errors.append("Evaluation is not_evaluated but justification provided")
        end
        if evaluation.evidence_item_ids.any?
          input_errors.append("Evaluation is not_evaluated but evidence item IDs provided")
        end
      else
        input_errors.append("Unsupported evaluation #{evaluation.evaluation}")
      end
    end

    # not more than one "met" evaluation in an assessment group
    grouped_evaluations = met_criteria.group_by{|c| SpecificationCriterium.find_by(criterium: c.specification_criterium, specification_id: fields.specification_id).assessment_group}
    grouped_evaluations.each do |group, evaluations|
      if evaluations.count > 1
        input_errors.append("Assessment group #{group} contains more than one met evaluation #{evaluations.map{|e| e.specification_criterium}.join(', ')}")
      end
    end

    # mututally exclusive codes
    met_criteria.each do |evaluation|
      mutually_exclusive_codes = SpecificationCriterium.find_by(criterium: evaluation.specification_criterium, specification_id: fields.specification_id).mutually_exclusive_codes
      overlap = met_criteria.map{|c| c.specification_criterium}.intersection(mutually_exclusive_codes)
      if overlap.any?
        input_errors.append("Met code #{evaluation.specification_criterium} is mutually exclusive with #{overlap.join(', ')}")
      end
    end

    assertion_eids = assertion.evidence_item_ids
    fields.evaluations.each do |evaluation|
      # evidence item ids exist
      eids = EvidenceItem.where(id: evaluation.evidence_item_ids).pluck(:id)
      missing_eids = evaluation.evidence_item_ids - eids
      if missing_eids.any?
        input_errors.append("Evidence Items don't exist for IDs #{missing_eids.join(', ')}")
      end
      # evidence items are not part of the assertion
      extra_eids = eids - assertion_eids
      if extra_eids.any?
        input_errors.append("Evidence Items are not linked to Assertion #{extra_eids.join(', ')}")
      end
    end

    #input_errors = InputAdaptors::SpecificationEvaluationInputAdaptor.check_input_for_errors(evaluation_input_objects: fields.evaluations)

    if input_errors.any?
      raise GraphQL::ExecutionError, input_errors.join("|")
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, organization_id: nil)
    assertion = Assertion.find(fields.assertion_id)
    if assertion.specifications.map{|s| s.id}.include?(fields.specification_id)
      # update existing evaluations
      evaluation_revisions_objects = fields.evaluations.map do |evaluation|
        existing_criterium = SpecificationCriterium.find_by(
          specification_id: fields.specification_id,
          criterium: evaluation.specification_criterium,
        )
        existing_evaluation = SpecificationEvaluation.find_by(
          assertion_id: fields.assertion_id,
          specification_criterium: existing_criterium,
        )
        updated_evaluation = InputAdaptors::SpecificationEvaluationInputAdaptor.new(
          evaluation_input_object: evaluation,
          assertion_id: fields.assertion_id,
          specification_id: fields.specification_id
        ).perform
        Activities::RevisedObjectPair.new(existing_obj: existing_evaluation, updated_obj: updated_evaluation)
      end

      cmd = Activities::SuggestRevisionSet.new(
        revised_objects: evaluation_revisions_objects,
        subject: assertion,
        originating_user: context[:current_user],
        organization_id: organization_id,
        note: nil,
      )
      resulting_specification_evaluations = cmd.revision_results
    else
      # new evaluations
      cmd = Activities::SubmitCriteriaEvaluations.new(
        assertion_id: fields.assertion_id,
        specification_id: fields.specification_id,
        evaluations: fields.evaluations,
        originating_user: context[:current_user],
        organization_id: organization_id,
      )
      resulting_specification_evaluations = cmd.specification_evaluations
    end
    res = cmd.perform

    if res.succeeded?
      {
        specification_evaluations: resulting_specification_evaluations,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
