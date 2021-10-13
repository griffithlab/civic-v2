#Conversion from a GraphQL AssertionFields input object to Assertion model type
class InputAdaptors::AssertionInputAdaptor
  attr_reader :input

  def initialize(assertion_input_object: )
    @input = assertion_input_object
  end

  def perform
    Assertion.new(
      description: input.description,
      summary: input.summary,
      variant_id: input.variant_id,
      gene_id: input.gene_id,
      variant_origin: input.variant_origin,
      evidence_type: input.evidence_type,
      clinical_significance: input.clinical_significance,
      disease_id: input.disease_id,
      evidence_direction: input.evidence_direction,
      phenotype_ids: input.phenotype_ids,
      drug_ids: input.drug_ids,
      drug_interaction_type: input.drug_interaction_type,
      amp_level: input.amp_level,
      evidence_item_ids: input.evidence_item_ids,
      nccn_guideline_id: input.nccn_guideline_id,
      acmg_code_ids: input.acmg_code_ids,
      fda_companion_test: input.fda_companion_test,
      fda_regulatory_approval: input.fda_regulatory_approval
    )
  end
end
