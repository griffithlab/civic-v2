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
end
