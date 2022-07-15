class Actions::SuggestMolecularProfileRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :description,
      :source_ids,
    ]
  end
end
