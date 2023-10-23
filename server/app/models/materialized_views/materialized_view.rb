class MaterializedViews::MaterializedView < ApplicationRecord
  self.abstract_class = true
  self.primary_key = :id

  def self.refresh
    Scenic.database.refresh_materialized_view(table_name, concurrently: true, cascade: false)
    timestamp = MaterializedViews::ViewLastUpdatedTimestamp.where(view_name: table_name).first_or_create!
    timestamp.touch
  end

  def last_updated
    MaterializedViews::ViewLastUpdatedTimestamp.find_by(view_name: table_name)&.updated_at
  end

  def readonly?
    true
  end
end
