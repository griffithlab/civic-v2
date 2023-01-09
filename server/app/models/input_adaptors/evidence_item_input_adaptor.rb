#Conversion from a GraphQL EvidenceItemFields input object to EvidenceItem model type
class InputAdaptors::EvidenceItemInputAdaptor
  attr_reader :input

  def initialize(evidence_input_object: )
    @input = evidence_input_object
  end

  def perform
    EvidenceItem.new(
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
      drug_ids: input.therapy_ids,
      drug_interaction_type: input.therapy_interaction_type
    )
  end

  def self.check_input_for_errors(evidence_input_object: )
    errors = []
    fields = evidence_input_object

    existing_phenotype_ids = Phenotype.where(id: fields.phenotype_ids).pluck(:id)
    if existing_phenotype_ids.size != fields.phenotype_ids.size
      errors << "Provided phenotype ids: #{fields.phenotype_ids.join(', ')} but only #{existing_phenotype_ids.join(', ')} exist."
    end

    existing_drug_ids = Drug.where(id: fields.therapy_ids).pluck(:id)
    if existing_drug_ids.size != fields.therapy_ids.size
      errors << "Provided therapy ids: #{fields.therapy_ids.join(', ')} but only #{existing_drug_ids.join(', ')} exist."
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
end
