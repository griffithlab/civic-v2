class RenameSourceName < ActiveRecord::Migration[6.1]
  def change
    rename_column :sources, :name, :title
  end
end
