class RenameClinicalSignificance < ActiveRecord::Migration[6.1]
  def change
    rename_column :evidence_items, :clinical_significance, :significance
    rename_column :assertions, :clinical_significance, :significance

    Revision.where(field_name: 'clinical_significance').find_each do |rev|
      rev.field_name = 'significance'
      rev.save!
    end
  end
end
