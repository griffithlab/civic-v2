class CreateOrganizationBrowseTableRows < ActiveRecord::Migration[7.1]
  def change
    create_view :organization_browse_table_rows, materialized: true
  end
end
