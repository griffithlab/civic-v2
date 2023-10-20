class Actions::SuggestAssertionRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :molecular_profile_id,
      :description,
      :summary,
      :variant_origin,
      :assertion_type,
      :significance,
      :disease_id,
      :assertion_direction,
      :phenotype_ids,
      :therapy_ids,
      :therapy_interaction_type,
      :amp_level,
      :evidence_item_ids,
      :nccn_guideline_id,
      :nccn_guideline_version,
      :acmg_code_ids,
      :clingen_code_ids,
      :fda_companion_test,
      :fda_regulatory_approval,
    ]
  end
end
