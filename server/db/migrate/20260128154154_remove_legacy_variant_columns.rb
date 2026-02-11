class RemoveLegacyVariantColumns < ActiveRecord::Migration[8.0]
  def change
    remove_column :variants, :gene_id
    remove_column :variants, :deleted
    remove_column :variants, :deleted_at
    remove_column :variants, :genome_build
    remove_column :variants, :chromosome
    remove_column :variants, :start
    remove_column :variants, :stop
    remove_column :variants, :reference_bases
    remove_column :variants, :variant_bases
    remove_column :variants, :representative_transcript
    remove_column :variants, :chromosome2
    remove_column :variants, :start2
    remove_column :variants, :stop2
    remove_column :variants, :secondary_gene_id
    remove_column :variants, :deprecation_comment_id
    remove_column :variants, :open_cravat_url
  end
end
