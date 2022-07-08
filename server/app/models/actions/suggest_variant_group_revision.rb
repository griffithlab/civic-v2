class Actions::SuggestVariantGroupRevision < Actions::SuggestRevisionSet
  def editable_fields
    [
      :description,
      :source_ids,
      :variant_ids,
      :name
    ]
  end
end

