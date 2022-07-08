#Conversion from a GraphQL EvidenceItemFields input object to EvidenceItem model type
class InputAdaptors::EvidenceItemInputAdaptor
  attr_reader :input

  def initialize(evidence_input_object: )
    @input = evidence_input_object
  end

  def perform
    EvidenceItem.new(
      variant_id: input.variant_id,
      variant_origin: input.variant_origin,
      source_id: input.source_id,
      evidence_type: input.evidence_type,
      clinical_significance: input.clinical_significance,
      disease_id: input.disease_id,
      description: input.description,
      evidence_level: input.evidence_level,
      evidence_direction: input.evidence_direction,
      phenotype_ids: input.phenotype_ids,
      rating: input.rating,
      drug_ids: input.drug_ids,
      drug_interaction_type: input.drug_interaction_type
    )
  end

  def self.check_input_for_errors(evidence_input_object: )
    errors = []
    fields = evidence_input_object

    existing_phenotype_ids = Phenotype.where(id: fields.phenotype_ids).pluck(:id)
    if existing_phenotype_ids.size != fields.phenotype_ids.size
      errors << "Provided phenotype ids: #{fields.phenotype_ids.join(', ')} but only #{existing_phenotype_ids.join(', ')} exist."
    end

    existing_drug_ids = Drug.where(id: fields.drug_ids).pluck(:id)
    if existing_drug_ids.size != fields.drug_ids.size
      errors << "Provided drug ids: #{fields.drug_ids.join(', ')} but only #{existing_drug_ids.join(', ')} exist."
    end

    if !Source.where(id: fields.source_id).exists?
      errors << "Provided source id: #{fields.source_id} is not found."
    end

    if fields.disease_id && !Disease.find(fields.disease_id)
      errors << "Provided disease id: #{fields.disease_id} is not found."
    end

    if !Variant.find(fields.variant_id)
      errors << "Provided variant id: #{fields.variant_id} is not found."
    end

    return errors
  end 
end
