class AddUniprotId < ActiveRecord::Migration[8.0]
  def change
    add_column :genes, :uniprot_ids, :text, array: true, default: []
  end
end
