class UpdateHgvsRevisions < ActiveRecord::Migration[6.1]
  def up
    Revision.where(subject_type: 'Variant', field_name: 'hgvs_expression_ids').find_each do |r|
      r.field_name = 'hgvs_description_ids'
      r.save!
    end
  end

  def down
    Revision.where(subject_type: 'Variant', field_name: 'hgvs_description_ids').find_each do |r|
      r.field_name = 'hgvs_expression_ids'
      r.save!
    end
  end
end
