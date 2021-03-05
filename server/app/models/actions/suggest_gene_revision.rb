class Actions::SuggestGeneRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :description,
      :source_ids
    ]
  end
end

