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
  "OP5" => 1,
  "N/A" => 2,
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
      "Other",
  ]
  spec.save!

  spec.specification_criteria.each do |sc|
    sc.position_within_assessment_group = order[sc.criterion] || 999
    sc.save(validate: false)
  end
end

specs = Specification.where(name: "NTRK SC-VCEP Oncogenicity specifications").all

order = {
  "FG1" => 1,
  "FG2" => 2,
  "FG3" => 3,

  "CA1" => 1,
  "CA2" => 2,
  "CA3" => 3,

  "CV" => 1,
  "FS1" => 2,
  "FS2" => 3,
  "FSN" => 4,
}

specs.each do |spec|
  spec.assessment_group_order = [
    "Fusion Gene Structure",
    "Cancer Association",
    "Clinical Validity and Functional Evidence",
  ]
  spec.save!

  spec.specification_criteria.each do |sc|
    sc.position_within_assessment_group = order[sc.criterion] || 999
    sc.save(validate: false)
  end
end

specs = Specification.where(name: "ACMG/AMP Codes",).all
order = {
  "BA1" => 1,
  "BS1" => 2,
  "PM2" => 3,

  "BS2" => 1,
  "PS4" => 2,

  "PVS1" => 1,

  "PS1" => 1,

  "PM1" => 1,

  "PM4" => 1,
  "BP3" => 2,

  "PM5" => 1,

  "PP2" => 1,
  "BP1" => 2,

  "PP3" => 1,
  "BP4" => 2,

  "BP7" => 1,

  "PS3" => 1,
  "BS3" => 2,

  "PP1" => 1,
  "BS4" => 2,

  "PS2" => 1,
  "PM6" => 2,

  "PM3" => 1,
  "BP2" => 2,

  "PP5" => 1,
  "BP6" => 2,

  "PP4" => 1,

  "BP5" => 1,
}


specs.each do |spec|
  spec.assessment_group_order = [
    "Population Data Assessment",
    "Case-Control Enrichment Assessment",
    "Null Variant Assessment",
    "Same Amino Acid Change Assessment",
    "Mutational Hot Spot and Functional Domain Assessment",
    "Protein Length Change Assessment",
    "Novel Missense Position Assessment",
    "Variant Spectrum Assessment",
    "In Silico Functional Impact Assessment",
    "Predicted Silent Variant Assessment",
    "Functional Data Assessment",
    "Segregation Data Assessment",
    "De Novo Occurrence Assessment",
    "Cis/Trans Variant Assessment",
    "Reputable Source Assessment",
    "Phenotype-Gene Specificity Assessment",
    "Alternative Cause Assessment"
  ]
  spec.save!

  spec.specification_criteria.each do |sc|
    sc.position_within_assessment_group = order[sc.criterion] || 999
    sc.save(validate: false)
  end
end
