class DiseaseBrowseTableRow < ApplicationRecord
  self.primary_key = :id

  def self.refresh
    Scenic.database.refresh_materialized_view(table_name, concurrently: true, cascade: false)
  end

  def readonly?
    true
  end

  def disease_url
    Disease.url_for_doid(self.doid)
  end
end
