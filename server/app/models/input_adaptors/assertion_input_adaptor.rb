# Conversion from a GraphQL AssertionFields input object to Assertion model type
class InputAdaptors::AssertionInputAdaptor
  attr_reader :input

  def initialize(assertion_input_object:)
    @input = assertion_input_object
  end

  def perform
    Assertion.new(
      description: input.description,
      summary: input.summary,
      molecular_profile_id: input.molecular_profile_id,
      variant_origin: input.variant_origin,
      assertion_type: input.assertion_type,
      significance: input.significance,
      disease_id: input.disease_id,
      assertion_direction: input.assertion_direction,
      phenotype_ids: input.phenotype_ids,
      therapy_ids: input.therapy_ids,
      therapy_interaction_type: input.therapy_interaction_type,
      amp_level: input.amp_level,
      evidence_item_ids: input.evidence_item_ids,
      nccn_guideline_id: input.nccn_guideline_id,
      nccn_guideline_version: input.nccn_guideline_version,
      acmg_code_ids: input.acmg_code_ids,
      clingen_code_ids: input.clingen_code_ids,
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

    existing_therapy_ids = Therapy.where(id: fields.therapy_ids).pluck(:id)
    if existing_therapy_ids.size != fields.therapy_ids.size
      errors << "Provided therapy ids: #{fields.therapy_ids.join(', ')} but only #{existing_therapy_ids.join(', ')} exist."
    end

    existing_eids = EvidenceItem.where(id: fields.evidence_item_ids)
    if existing_eids.size != fields.evidence_item_ids.size
      errors << "Provided evidence item ids: #{fields.evidence_item_ids.join(', ')} but only #{existing_eids.map(&:id).join(', ')} exist."
    end

    invalid_eid = false
    existing_eids.each do |eid|
      unless eid.valid?
        invalid_eid = true
        errors << "EID#{eid.id} Invalid: #{eid.errors.values.join(", ")}"
      end
    end

    if invalid_eid
      errors << "Please revise Evidence Items to put them in a valid state before including them in an Assertion."
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

    existing_clingen_ids = ClingenCode.where(id: fields.clingen_code_ids).pluck(:id)
    if existing_clingen_ids.size != fields.clingen_code_ids.size
      errors << "Provided ClinGen code ids: #{fields.clingen_code_ids.join(', ')} but only #{existing_clingen_ids.join(', ')} exist."
    end

    if !MolecularProfile.where(id: fields.molecular_profile_id).exists?
      errors << "Provided molecular profile id: #{fields.molecular_profile_id} is not found."
    end

    return errors
  end
end
