Features::Gene.find_each do |gene|
  feature = Feature.find_by(feature_instance: gene)
  feature.flagged = gene.flagged
  feature.save!

  flags = Flag.where(flaggable: gene)
  flags.each do |flag|
    flag.flaggable = feature
    flag.save!
  end
end
