class Actions::SuggestMolecularProfileRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :common_name,
      :description,
      :source_ids,
      :molecular_profile_alias_ids,
    ]
  end
end
