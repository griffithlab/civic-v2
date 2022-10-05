class Actions::SuggestEvidenceItemRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :molecular_profile_id,
      :variant_origin,
      :source_id,
      :evidence_type,
      :clinical_significance,
      :disease_id,
      :description,
      :evidence_level,
      :evidence_direction,
      :phenotype_ids,
      :rating,
      :drug_interaction_type,
      :drug_ids
    ]
  end
end
