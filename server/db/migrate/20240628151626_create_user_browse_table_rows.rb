class CreateUserBrowseTableRows < ActiveRecord::Migration[7.1]
  def change
    create_view :user_browse_table_rows, materialized: true
  end
end
