parent = Specification.find_by(name: "ClinGen/CGC/VICC Codes")
Graph::Node.where(term: parent).first_or_create!

spec = Specification.where(
  name: "FGFR SC-VCEP Oncogenicity specifications",
  version: "0",
  published_on: Date.parse("2025-04-03"),
  specification_url: "",
  specification_type: :clingen_codes,
  assertion_type: :Oncogenic,
  organization: Organization.find_by(name: "FGFR SC-VCEP"),
  evaluation_method: "all_strength",
  assessment_group_order: [ "Primary Sequence Consequence", "Amino Acid or Residue Analogy", "Functional Assay", "Somatic Hotspot Recurrence", "Computational Prediction", "Population Frequency" ],
  assessment_groups: {
    "Functional Assay" => "Assessment of well-established in vitro or in vivo functional studies to determine whether experimental evidence supports or refutes an oncogenic effect.",
    "Population Frequency" => "Assessment of whether population control frequency refutes oncogenicity or whether absence/extreme rarity in controls provides supporting evidence for oncogenicity.",
    "Computational Prediction" => "Aggregate assessment of computational predictions, including conservation, missense-effect, and splice-effect tools, supporting either oncogenic effect or no effect.",
    "Somatic Hotspot Recurrence" => "Assessment of somatic recurrence at cancer hotspots or recurrently mutated residues, with evidence strength based on recurrence thresholds.",
    "Primary Sequence Consequence" => "Assessment of the primary sequence-level consequence of the variant, including null/loss-of-function effects, protein-length changes, stop-loss effects, or synonymous variants predicted to have no splice or conservation impact.",
    "Amino Acid or Residue Analogy" => "Assessment by analogy to previously established oncogenic variants, including the same amino acid change or a different missense change at the same residue.",
  },
  is_draft: true
).first_or_create

spec.add_parent_term(parent)

specification_criteria = [
  {
    criterion: "OS1",
    modifiers: {},
  },
  {
    criterion: "OS2",
    description: "Well-established in vitro or in vivo functional studies, supportive of an oncogenic effect of the variant. [Functional assay showing biochemical activation of FGFR3 = +2; AND functional assay showing increased cell proliferation = +2; ] (OR) functional assay meeting criteria for Strong evidence code (Brnich paper) = +4. If OS1 is applicable, this rule can be used only if functional studies are based on the particular nucleotide change of the variant.",
    modifiers: { "Moderate" => nil },
  },
  {
    criterion: "OS3",
    description: "Located in one of the hotspots in cancer hotspots.org with at least 50 samples with a somatic variant at the same amino acid position, and the same amino acid change count in cancerhotspots.org in at least 10 samples. This rule cannot be used if OS1 is applicable, unless it is possible to observe hotspots on the basis of the particular nucleotide change.",
    modifiers: {},
  },
  {
    criterion: "OM3",
    description: "Located in one of the hotspots in cancerhotspots.org. Must be observed with <50 samples with a somatic variant at the same amino acid position, and the same amino acid change count in at least 10 samples in cancerhotspots.org OR CBioPortal OR COSMIC. Counts cannot be added across these databases. This rule cannot be used if OS3, OM1, or OM4 is applicable.",
    modifiers: {},
  },
  {
    criterion: "OM4",
    modifiers: {},
  },
  {
    criterion: "OP1",
    description: "Computational evidence based on a REVEL score >0.629 supports an oncogenic effect of a variant (conservation/ evolutionary, splicing effect, etc.).",
    modifiers: {},
  },
  {
    criterion: "OP3",
    description: "Located in one of the hotspots in cancer hotspots.org. Observed in <10 samples with the same amino acid change in cancerhotspots.org, CBioPortal, and COSMIC. Counts cannot be added across these databases. This rule cannot be used if OS3 or OM3 is applicable.",
    modifiers: {},
  },
  {
    criterion: "OP4",
    description: "Absent from gnomADv4 or the minor allele frequency is below .01% according to the Grpmax Filtering AF (95% confidence).",
    modifiers: {},
  },
  {
    criterion: "SBVS1",
    description: "Minor allele frequency is >1% in gnomADv4 according to the Grpmax  Filtering AF (95% confidence).",
    modifiers: {},
  },
  {
    criterion: "SBS1",
    description: "Minor allele frequency is >.1% in gnomADv4 according to the Grpmax  Filtering AF (95% confidence).",
    modifiers: {},
  },
  {
    criterion: "SBS2",
    description: "Well-established in vitro or in vivo functional studies show no oncogenic effects. Unambiguous evidence of no oncogenic effect in Functional assay assessing biochemical activation of FGFR3 OR functional assay assessing cell proliferation
",
    modifiers: { "Moderate" => nil, "Supporting" => nil },
  },
  {
    criterion: "SBP1",
    description: "Computational evidence based on a REVEL score <1.348 suggests no effect of a variant (conservation/evolutionary, splicing effect, etc.).",
    modifiers: {},
  },
  {
    criterion: "SBP2",
    description: "A synonymous (silent) variant regardless of splicing prediction. Splice variants are not an established oncogenic mechanism within FGFR3",
    modifiers: {},
  },
]

specification_criteria.each do |criterion|
  parent_criterion = SpecificationCriterion.find_by(
    specification: parent,
    criterion: criterion[:criterion],
  )

  description = if criterion[:description].nil?
    parent_criterion.description
  else
    criterion[:description]
  end

  SpecificationCriterion.where(
    specification: spec,
    criterion: criterion[:criterion],
    description: description,
    modifiers: criterion[:modifiers],
    assessment_group: parent_criterion.assessment_group,
    point_value: parent_criterion.point_value,
    position_within_assessment_group: parent_criterion.position_within_assessment_group,
    mutually_exclusive_codes: parent_criterion.mutually_exclusive_codes,
  ).first_or_create!
end
