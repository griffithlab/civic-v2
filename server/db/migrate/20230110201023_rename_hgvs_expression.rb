class RenameHgvsExpression < ActiveRecord::Migration[6.1]
  def change
    rename_column :hgvs_expressions, :expression, :description
    rename_table :hgvs_expressions, :hgvs_descriptions

    rename_table :hgvs_expressions_variants, :hgvs_descriptions_variants
    rename_column :hgvs_descriptions_variants, :hgvs_expression_id, :hgvs_description_id
  end
end
