#Conversion from a GraphQL EvidenceItemFields input object to EvidenceItem model type
class InputAdaptors::EvidenceItemInputAdaptor
  attr_reader :input

  def initialize(evidence_input_object: )
    @input = evidence_input_object
  end

  def perform
    EvidenceItem.new(self.class.evidence_fields(input))
  end

  def self.check_input_for_errors(evidence_input_object: , revised_eid: nil)
    errors = []
    fields = evidence_input_object

    query_fields = evidence_fields(fields)
    # if there is a matching rejected EID, still allow the revisions
    query_fields[:status] = ['accepted', 'submitted']
    query_fields.delete(:description)
    query_fields.delete(:therapy_ids)
    query_fields.delete(:phenotype_ids)

    eid_query = EvidenceItem.where(query_fields)
    if revised_eid.present?
      eid_query = eid_query.where.not(id: revised_eid)
    end

    #rejected EIDs dont count towards duplicate status
    if eid = eid_query.where(status: ['submitted', 'accepted']).first
      if eid.therapy_ids.sort == fields.therapy_ids.sort && eid.phenotype_ids.sort == fields.phenotype_ids.sort
        errors << "Existing identical Evidence Item found: EID#{eid.id}"
      end
    end

    existing_phenotype_ids = Phenotype.where(id: fields.phenotype_ids).pluck(:id)
    if existing_phenotype_ids.size != fields.phenotype_ids.size
      errors << "Provided phenotype ids: #{fields.phenotype_ids.join(', ')} but only #{existing_phenotype_ids.join(', ')} exist."
    end

    existing_therapy_ids = Therapy.where(id: fields.therapy_ids).pluck(:id)
    if existing_therapy_ids.size != fields.therapy_ids.size
      errors << "Provided therapy ids: #{fields.therapy_ids.join(', ')} but only #{existing_therapy_ids.join(', ')} exist."
    end

    if !Source.where(id: fields.source_id).exists?
      errors << "Provided source id: #{fields.source_id} is not found."
    end

    if fields.disease_id && !Disease.find(fields.disease_id)
      errors << "Provided disease id: #{fields.disease_id} is not found."
    end

    mp = MolecularProfile.find(fields.molecular_profile_id)
    if !mp
      errors << "Provided molecular profile id: #{fields.molecular_profile_id} is not found."
    elsif mp.deprecated
      errors << "Provided molecular profile id: molecular profile is deprecated."
    end

    return errors
  end

  def self.evidence_fields(input)
    {
        molecular_profile_id: input.molecular_profile_id,
        variant_origin: input.variant_origin,
        source_id: input.source_id,
        evidence_type: input.evidence_type,
        significance: input.significance,
        disease_id: input.disease_id,
        description: input.description,
        evidence_level: input.evidence_level,
        evidence_direction: input.evidence_direction,
        phenotype_ids: input.phenotype_ids,
        rating: input.rating,
        therapy_ids: input.therapy_ids,
        therapy_interaction_type: input.therapy_interaction_type
    }
  end
end
