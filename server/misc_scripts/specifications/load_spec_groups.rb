# run order 3
clingen_code_groups = {
  "Population Frequency": "Assessment of whether population control frequency refutes oncogenicity or whether absence/extreme rarity in controls provides supporting evidence for oncogenicity.",
  "Functional Assay": "Assessment of well-established in vitro or in vivo functional studies to determine whether experimental evidence supports or refutes an oncogenic effect.",
  "Primary Sequence Consequence": "Assessment of the primary sequence-level consequence of the variant, including null/loss-of-function effects, protein-length changes, stop-loss effects, or synonymous variants predicted to have no splice or conservation impact.",
  "Functional Domain Location": "Assessment of whether the variant occurs in a critical and well-established functional domain or region, such as an enzyme active site.",
  "Amino Acid or Residue Analogy": "Assessment by analogy to previously established oncogenic variants, including the same amino acid change or a different missense change at the same residue.",
  "Somatic Hotspot Recurrence": "Assessment of somatic recurrence at cancer hotspots or recurrently mutated residues, with evidence strength based on recurrence thresholds.",
  "Computational Prediction": "Aggregate assessment of computational predictions, including conservation, missense-effect, and splice-effect tools, supporting either oncogenic effect or no effect.",
  "Single Genetic Etiology Context": "Assessment of whether the variant occurs in a gene and malignancy context where the disease has a single genetic etiology, making that gene-level event supportive of oncogenicity.",
}

clingen_code_groupings = {
  "SBVS1" => "Population Frequency",
  "SBS1" => "Population Frequency",
  "OP4" => "Population Frequency",
  "OS2" => "Functional Assay",
  "SBS2" => "Functional Assay",
  "OVS1" => "Primary Sequence Consequence",
  "OM2" => "Primary Sequence Consequence",
  "SBP2" => "Primary Sequence Consequence",
  "OM1" => "Functional Domain Location",
  "OS1" => "Amino Acid or Residue Analogy",
  "OM4" => "Amino Acid or Residue Analogy",
  "OS3" => "Somatic Hotspot Recurrence",
  "OM3" => "Somatic Hotspot Recurrence",
  "OP3" => "Somatic Hotspot Recurrence",
  "OP1" => "Computational Prediction",
  "SBP1" => "Computational Prediction",
  "OP2" => "Single Genetic Etiology Context",
}

specification = Specification.find_by(name: "ClinGen/CGC/VICC Codes")

specification.assessment_groups = clingen_code_groups
specification.save!

specification.specification_criterium.each do |criterium|
  # TODO figure out how to handle N/A
  next if criterium.criterium == 'N/A'
  criterium.assessment_group = clingen_code_groupings.fetch(criterium.criterium)
  criterium.save!
end


acmg_code_groups = {
  "Population Data Assessment": "Assessment of whether population control frequency refutes pathogenicity or whether absence/extreme rarity in controls provides supporting evidence for pathogenicity.",
  "Case-Control Enrichment Assessment": "Prevalence in affected statistically increased over matched controls, or enrichment in controls inconsistent with disease penetrance.",
  "Null Variant Assessment": "Predicted null variant in a gene where LOF is a known mechanism of disease.",
  "Same Amino Acid Change Assessment": "Same amino acid change as an established pathogenic variant.",
  "Mutational Hot Spot and Functional Domain Assessment": "Mutational hot spot or well-established functional domain without benign variation.",
  "Protein Length Change Assessment": "Protein length change, or in-frame indels changing counts of repeats with no known function.",
  "Novel Missense Position Assessment": "Novel missense change at an amino acid where a different pathogenic missense change has been seen before.",
  "Variant Spectrum Assessment": "Missense in a gene where only truncation causes disease, or with low rate of benign missense variation.",
  "In Silico Functional Impact Assessment": "Multiple lines of computational evidence support a deleterious effect or no impact.",
  "Predicted Silent Variant Assessment": "Silent variant with no predicted splicing impact.",
  "Functional Data Assessment": "Well-established functional studies show or do not show deleterious effect.",
  "Segregation Data Assessment": "Cosegregation with disease in multiple family members, or nonsegregation.",
  "De Novo Occurrence Assessment": "De novo, with or without paternity and maternity confirmed.",
  "Cis/Trans Variant Assessment": "Observed in trans with a dominant variant, in cis with a pathogenic variant, or in trans with a pathogenic variant in a recessive disorder.",
  "Reputable Source Assessment": "Benign or pathogenic according to a reputable source.",
  "Phenotype-Gene Specificity Assessment": "Patient's phenotype or family history highly specific for the gene and disorder.",
  "Alternative Cause Assessment": "Found in a case with an alternate cause.",
}

acmg_code_groupings = {
  "BA1" => "Population Data Assessment",
  "BS1" => "Population Data Assessment",
  "PM2" => "Population Data Assessment",

  "BS2" => "Case-Control Enrichment Assessment",
  "PS4" => "Case-Control Enrichment Assessment",

  "PVS1" => "Null Variant Assessment",

  "PS1" => "Same Amino Acid Change Assessment",

  "PM1" => "Mutational Hot Spot and Functional Domain Assessment",

  "PM4" => "Protein Length Change Assessment",
  "BP3" => "Protein Length Change Assessment",

  "PM5" => "Novel Missense Position Assessment",

  "PP2" => "Variant Spectrum Assessment",
  "BP1" => "Variant Spectrum Assessment",

  "PP3" => "In Silico Functional Impact Assessment",
  "BP4" => "In Silico Functional Impact Assessment",

  "BP7" => "Predicted Silent Variant Assessment",

  "PS3" => "Functional Data Assessment",
  "BS3" => "Functional Data Assessment",

  "PP1" => "Segregation Data Assessment",
  "BS4" => "Segregation Data Assessment",

  "PS2" => "De Novo Occurrence Assessment",
  "PM6" => "De Novo Occurrence Assessment",

  "PM3" => "Cis/Trans Variant Assessment",
  "BP2" => "Cis/Trans Variant Assessment",

  "PP5" => "Reputable Source Assessment",
  "BP6" => "Reputable Source Assessment",

  "PP4" => "Phenotype-Gene Specificity Assessment",

  "BP5" => "Alternative Cause Assessment",
}

specification = Specification.find_by(name: "ACMG/AMP Codes")

specification.assessment_groups = acmg_code_groups
specification.save!

specification.specification_criterium.each do |criterium|
  criterium.assessment_group = acmg_code_groupings.fetch(criterium.criterium)
  criterium.save!
end
