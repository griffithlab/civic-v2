regex = MolecularProfile::GENE_REGEX

MolecularProfile.find_each do |mp|
  mp.name = mp.name.gsub(regex, '').squish
  mp.save!
end
