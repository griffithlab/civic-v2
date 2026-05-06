class MaterializedViews::DiseaseBrowseTableRow < MaterializedViews::MaterializedView
  def disease_url
    Disease.url_for_doid(self.doid)
  end
end
