# run order 4
specs = Specification.where(name: "ClinGen/CGC/VICC Codes",).all

exclusions = {
  "OVS1" => [ "OM2" ],
  "OM2" => [ "OVS1" ],
  "OS1" => [ "OM1", "OM3" ],
  "OS3" => [ "OM1", "OM3" ],
  "OM1" => [ "OS1", "OS3", "OM3", "OM4" ],
  "OM3" => [ "OS1", "OS3", "OM1", "OM4" ],
  "OM4" => [ "OM1", "OM3" ],
}

specs.each do |spec|
  spec.specification_criterium.each do |sc|
    sc.mutually_exclusive_codes = exclusions[sc.criterium]
    sc.save(validate: false)
  end
end
