class Actions::SuggestVariantRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :gene_id,
      :name,
      :variant_alias_ids,
      :hgvs_description_ids,
      :clinvar_entry_ids,
      :variant_type_ids,
      :reference_build,
      :ensembl_version,
      :chromosome,
      :start,
      :stop,
      :reference_bases,
      :variant_bases,
      :representative_transcript,
      :chromosome2,
      :start2,
      :stop2,
      :representative_transcript2,
    ]
  end
end
