class CreateFeatureBrowseTableRows < ActiveRecord::Migration[6.1]
  def change
    create_view :feature_browse_table_rows, materialized: true
  end
end
