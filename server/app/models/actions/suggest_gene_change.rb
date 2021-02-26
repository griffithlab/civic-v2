class Actions::SuggestGeneChange < Actions::SuggestChangeSet
  def editable_fields
    [
      :description,
      :source_ids
    ]
  end
end

