# for all variants, find the single variant MP, get a list of its aliases and the variant's alias. merge the lists and store as MP aliases
Variant.find_each do |v|
  if v.variant_aliases.any?
    svmp = v.single_variant_molecular_profile
    all_aliases = (svmp.molecular_profile_aliases.pluck(:name) + v.variant_aliases.pluck(:name)).uniq

    alias_records = all_aliases.map do |a|
      MolecularProfileAlias.where(name: a).first_or_create!
    end

    svmp.molecular_profile_aliases = alias_records
  end
end
