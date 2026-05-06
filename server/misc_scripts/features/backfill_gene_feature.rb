Features::Gene.find_each do |gene|
  if feature = Feature.find_by(feature_instance: gene)
    Variant.where(gene_id: gene.id).find_each do |variant|
      variant.feature = feature
      variant.save!(validate: false)
    end
    next
  end

  feature = Feature.create!(
    name: gene.name,
    description: gene.description,
    feature_instance: gene
  )

  gene.gene_aliases.each do |gene_alias|
    feature_alias = FeatureAlias.where(name: gene_alias.name).first_or_create
    feature.feature_aliases << feature_alias
  end

  feature.sources = gene.sources

  feature.save!

  Variant.where(gene_id: gene.id).find_each do |variant|
    variant.feature = feature
    variant.save
  end
end
