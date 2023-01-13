class Actions::SuggestEvidenceItemRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :molecular_profile_id,
      :variant_origin,
      :source_id,
      :evidence_type,
      :significance,
      :disease_id,
      :description,
      :evidence_level,
      :evidence_direction,
      :phenotype_ids,
      :rating,
      :therapy_interaction_type,
      :therapy_ids
    ]
  end
end
