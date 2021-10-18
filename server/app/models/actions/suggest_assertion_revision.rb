class Actions::SuggestAssertionRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :description,
      :summary,
      :variant_id,
      :gene_id,
      :variant_origin,
      :evidence_type,
      :clinical_significance,
      :disease_id,
      :evidence_direction,
      :phenotype_ids,
      :drug_ids,
      :drug_interaction_type,
      :amp_level,
      :evidence_item_ids,
      :nccn_guideline_id,
      :acmg_code_ids,
      :fda_companion_test,
      :fda_regulatory_approval,
    ]
  end
end
