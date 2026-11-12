class AddClinicalSignificancesToSpecifications < ActiveRecord::Migration[8.1]
  def change
    add_column :specifications, :clinical_significances, :hstore
  end
end
