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
      evidence_type: input.assertion_type,
      clinical_significance: input.clinical_significance,
      disease_id: input.disease_id,
      evidence_direction: input.assertion_direction,
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

  def self.check_input_for_errors(assertion_input_object:)
    errors = []
    fields = assertion_input_object

    existing_phenotype_ids = Phenotype.where(id: fields.phenotype_ids).pluck(:id)
    if existing_phenotype_ids.size != fields.phenotype_ids.size
      errors << "Provided phenotype ids: #{fields.phenotype_ids.join(', ')} but only #{existing_phenotype_ids.join(', ')} exist."
    end

    existing_drug_ids = Drug.where(id: fields.drug_ids).pluck(:id)
    if existing_drug_ids.size != fields.drug_ids.size
      errors << "Provided drug ids: #{fields.drug_ids.join(', ')} but only #{existing_drug_ids.join(', ')} exist."
    end

    existing_eids = EvidenceItem.where(id: fields.evidence_item_ids).pluck(:id)
    if existing_eids.size != fields.evidence_item_ids.size
      errors << "Provided evidence item ids: #{fields.evidence_item_ids.join(', ')} but only #{existing_eids.join(', ')} exist."
    end

    if fields.disease_id && !Disease.where(id: fields.disease_id).exists?
      errors << "Provided disease id: #{fields.disease_id} is not found."
    end

    if fields.nccn_guideline_id && !NccnGuideline.where(id: fields.nccn_guideline_id).exists?
      errors << "Provided NCCN Guideline id: #{fields.nccn_guideline_id} is not found."
    end

    existing_acmg_ids = AcmgCode.where(id: fields.acmg_code_ids).pluck(:id)
    if existing_acmg_ids.size != fields.acmg_code_ids.size
      errors << "Provided ACMG code ids: #{fields.acmg_code_ids.join(', ')} but only #{existing_acmg_ids.join(', ')} exist."
    end

    if !Variant.where(id: fields.variant_id).exists?
      errors << "Provided variant id: #{fields.variant_id} is not found."
    end

    if !Gene.where(id: fields.gene_id).exists?
      errors << "Provided gene id: #{fields.gene_id} is not found."
    end

    return errors
  end
end
