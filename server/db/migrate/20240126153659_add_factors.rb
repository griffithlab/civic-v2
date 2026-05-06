class AddFactors < ActiveRecord::Migration[6.1]
  def change
    create_table :factors do |t|
      t.text :ncit_id
      t.timestamps
    end
  end
end
