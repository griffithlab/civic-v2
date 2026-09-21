# run order 5
specs = Specification.where(name: "ClinGen/CGC/VICC Codes",).all

order = {
  "OVS1" => 1,
  "OM2" => 2,
  "SBP2" => 3,
  "OS1" => 1,
  "OM4" => 2,
  "OS2" => 1,
  "SBS2" => 2,
  "OS3" => 1,
  "OM3" => 2,
  "OP3" => 3,
  "OM1" => 1,
  "OP1" => 1,
  "SBP1" => 2,
  "OP2" => 1,
  "SBVS1" => 1,
  "SBS1" => 2,
  "OP4" => 3,
}


specs.each do |spec|
  spec.assessment_group_order = [
      "Primary Sequence Consequence",
      "Amino Acid or Residue Analogy",
      "Functional Assay",
      "Somatic Hotspot Recurrence",
      "Functional Domain Location",
      "Computational Prediction",
      "Single Genetic Etiology Context",
      "Population Frequency",
  ]
  spec.save!

  spec.specification_criterium.each do |sc|
    sc.position_within_assessment_group = order[sc.criterium] || 999
    sc.save(validate: false)
  end
end
