# Conversion from a GraphQL EvidenceItemFields input object to EvidenceItem model type
class InputAdaptors::SpecificationEvaluationInputAdaptor
  attr_reader :input, :assertion_id, :specification_id

  def initialize(evaluation_input_object:, assertion_id:, specification_id:)
    @input = evaluation_input_object
    @assertion_id = assertion_id
    @specification_id = specification_id
  end

  def perform
    SpecificationEvaluation.new(self.class.evaluation_fields(input, assertion_id, specification_id))
  end

#  def self.check_input_for_errors(evidence_input_object:, revised_eid: nil)
#    errors = []
#    fields = evidence_input_object
#
#    query_fields = evidence_fields(fields)
#    # if there is a matching rejected EID, still allow the revisions
#    query_fields[:status] = [ "accepted", "submitted" ]
#    query_fields.delete(:description)
#    query_fields.delete(:therapy_ids)
#    query_fields.delete(:phenotype_ids)
#
#    eid_query = EvidenceItem.where(query_fields)
#    if revised_eid.present?
#      eid_query = eid_query.where.not(id: revised_eid)
#    end
#
#    # rejected EIDs dont count towards duplicate status
#    if eid = eid_query.where(status: [ "submitted", "accepted" ]).first
#      if eid.therapy_ids.sort == fields.therapy_ids.sort && eid.phenotype_ids.sort == fields.phenotype_ids.sort
#        errors << "Existing identical Evidence Item found: EID#{eid.id}"
#      end
#    end
#
#    existing_phenotype_ids = Phenotype.where(id: fields.phenotype_ids).pluck(:id)
#    if existing_phenotype_ids.size != fields.phenotype_ids.size
#      errors << "Provided phenotype ids: #{fields.phenotype_ids.join(', ')} but only #{existing_phenotype_ids.join(', ')} exist."
#    end
#
#    existing_therapy_ids = Therapy.where(id: fields.therapy_ids).pluck(:id)
#    if existing_therapy_ids.size != fields.therapy_ids.size
#      errors << "Provided therapy ids: #{fields.therapy_ids.join(', ')} but only #{existing_therapy_ids.join(', ')} exist."
#    end
#
#    if !Source.where(id: fields.source_id).exists?
#      errors << "Provided source id: #{fields.source_id} is not found."
#    end
#
#    if fields.disease_id && !Disease.find_by(id: fields.disease_id)
#      errors << "Provided disease id: #{fields.disease_id} is not found."
#    end
#
#    mp = MolecularProfile.find_by(id: fields.molecular_profile_id)
#    if !mp
#      errors << "Provided molecular profile id: #{fields.molecular_profile_id} is not found."
#    elsif mp.deprecated
#      errors << "Provided molecular profile id: molecular profile is deprecated."
#    end
#
#    return errors
#  end

  def self.evaluation_fields(input, assertion_id, specification_id)
    specification_criterium = SpecificationCriterium.find_by(specification_id: specification_id, criterium: input.specification_criterium)
    {
        assertion_id: assertion_id,
        specification_criterium_id: specification_criterium.id,
        evaluation: input.evaluation,
        modifier: input.modifier,
        justification: input.justification,
        evidence_item_ids: input.evidence_item_ids,
    }
  end
end
