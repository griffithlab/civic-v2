class Actions::SuggestMolecularProfileRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :description,
      :source_ids,
      :molecular_profile_alias_ids,
    ]
  end
end
