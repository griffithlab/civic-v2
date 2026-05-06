class CreateFusionsKnownPartnerGenes < ActiveRecord::Migration[8.0]
  def change
    create_table :fusions_known_partner_genes do |t|
      t.belongs_to :fusion, index: true
      t.belongs_to :gene, index: true
      t.index [ :fusion_id, :gene_id ]
      t.index [ :gene_id, :fusion_id ]
    end
  end
end
