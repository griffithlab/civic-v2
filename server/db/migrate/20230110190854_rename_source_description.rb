class RenameSourceDescription < ActiveRecord::Migration[6.1]
  def change
    rename_column :sources, :description, :citation
  end
end
