module Types::Revisions
  class AssertionFields < Types::BaseInputObject
    description 'Fields on an Assertion that curators may propose revisions to.'
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "A detailed description of the Assertion including practice guidelines and approved tests."
    argument :summary, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "A brief single sentence statement summarizing the clinical significance of this Assertion."
    argument :variant_id, Int, required: true,
      description: 'The ID of the Variant to which this Assertion belongs'
    argument :gene_id, Int, required: true,
      description: 'The ID of the Gene to which this Assertion belongs'
    argument :variant_origin, Types::VariantOriginType, required: true,
      description: 'The Variant Origin for this Assertion.'
    argument :assertion_type, Types::AssertionTypeType, required: true,
      description: 'The Type of the Assertion'
    argument :clinical_significance, Types::AssertionClinicalSignificanceType, required: true,
      description: 'The Clinical Significance of the Assertion'
    argument :disease_id, Types::NullableValueInputType.for(GraphQL::Types::Int), required: true,
      description: 'The ID of the disease (if applicable) for this Assertion'
    argument :assertion_direction, Types::AssertionDirectionType, required: true,
      description: 'The evidence direction for this Assertion.'
    argument :phenotype_ids, [Int], required: true,
      description: 'List of IDs of CIViC Phenotype entries for this Assertion. An empty list indicates none.'
    argument :drug_ids, [Int], required: true,
      description: 'List of IDs of CIViC Drug entries for this Assertion. An empty list indicates none.'
    argument :drug_interaction_type, Types::NullableValueInputType.for(Types::DrugInteractionType), required: true,
      description: 'Drug interaction type for cases where more than one drug ID is provided.'
    argument :amp_level, Types::NullableValueInputType.for(Types::AmpLevelType), required: true,
      description: 'The AMP/ASCO/CAP Category for this assertion.'
    argument :evidence_item_ids, [Int], required: true,
      description: 'IDs of evidence items that are included in this Assertion.'
    argument :nccn_guideline_id, Types::NullableValueInputType.for(GraphQL::Types::Int), required: true,
      description: 'The internal CIViC ID of the NCCN guideline associated with this Assertion'
    argument :nccn_guideline_version, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: 'The version of the NCCN Guideline specified'
    argument :acmg_code_ids, [Int], required: true,
      description: 'List of CIViC IDs for the ACMG/AMP codes associated with this Assertion'
    argument :fda_companion_test, Boolean, required: true,
      description: 'Is an FDA companion test available that pertains to this Assertion.'
    argument :fda_regulatory_approval, Boolean, required: true,
      description: 'Does the Assertion have FDA regulatory approval.'
  end
end
