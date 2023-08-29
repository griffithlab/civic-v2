class Actions::SuggestMolecularProfileRevision < Actions::SuggestRevisionSet
  def editable_fields
    if existing_obj.is_complex?
        [
          :description,
          :source_ids,
          :molecular_profile_alias_ids,
        ]
      else
        [
          :description,
          :source_ids,
        ]
      end
  end
end
