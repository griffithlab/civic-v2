class AddSourceSuggestionForeignKeys < ActiveRecord::Migration[6.1]
  def up
    add_column :source_suggestions, :gene_id, :integer
    add_column :source_suggestions, :variant_id, :integer
    add_column :source_suggestions, :disease_id, :integer

    add_foreign_key :source_suggestions, :genes, column: :gene_id
    add_foreign_key :source_suggestions, :variants, column: :variant_id
    add_foreign_key :source_suggestions, :diseases, column: :disease_id

    SourceSuggestion.all.each do |s|
      if !s.gene_name.blank?
        gene = Gene.find_by(name: s.gene_name)
        s.gene_id = gene.id
        s.save
      end

      if !s.variant_name.blank? && !s.gene_id.blank?
        variant = Variant.where("name ILIKE ?", s.variant_name).where(gene_id: s.gene_id).first
        if !variant
          variant = Variant.create!(gene_id: s.gene_id, name: s.variant_name, description: "")
        end
        s.variant_id = variant.id
        s.save
      end

      if !s.disease_name.blank?
        disease = Disease.find_by("name ILIKE ?", s.disease_name)
        if !disease
          disease = Disease.create!(name: s.disease_name, display_name: s.disease_name)
        end
        s.disease_id = disease.id
        s.save
      end
    end
  end

  def down
    remove_column :source_suggestions, :gene_id
    remove_column :source_suggestions, :variant_id
    remove_column :source_suggestions, :disease_id
  end
end
