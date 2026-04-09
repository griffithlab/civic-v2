specifications = [
  {
    name: "NTRK SC-VCEP AMP/ASCO/CAP specifications",
    version: "1",
    published_on: Date.parse("2026-02-17"),
    specification_type: :amp_tiers,
    assertion_type: :Diagnostic,
    organization: Organization.find_by(name: "NTRK SC-VCEP"),
    specification_url: "https://www.clinicalgenome.org/site/assets/files/10891/ntrk_ampascocap_specifications_v6_2926.pdf",
    # maybe?
    sop_pubmed_id: 35366592,
    specification_criteria: [
      {
        criterium: "Tier I - Level A",
        description: "Biomarkers included in World Health Organization (WHO) classification of tumors as diagnostic for a specific type of tumor such as Infantile fibrosarcoma, NTRK-rearranged spindle cell neoplasm, breast secretory carcinoma, congenital mesoblastic nephroma, or mammary analogue secretory carcinoma of the salivary gland.",
      },
    ],
  },
  {
    name: "NTRK SC-VCEP Oncogenicity specifications",
    version: "1",
    published_on: Date.parse("2026-02-17"),
    specification_type: :clingen_codes,
    assertion_type: :Oncogenic,
    organization: Organization.find_by(name: "NTRK SC-VCEP"),
    specification_url: "https://www.clinicalgenome.org/site/assets/files/10892/ntrk_scvcep_step_2_rules_specifications_v4_11524.pdf",
    # maybe?
    sop_pubmed_id: 35366592,
    specification_criteria: [
      {
        criterium: "FG1",
        description: "Expected gene orientation: NTRK as 3' partner.",
      },
      {
        criterium: "FG2",
        description: "Fusion breakpoint: NTRK fusion junction is prior to 3' exons encoding kinase domain.",
      },
      {
        criterium: "FG3",
        description: "Reading frame: 3' NTRK tyrosine kinase domain (TKD) reading frame retained.",
      },
      {
        criterium: "CA1",
        description: "Known Fusion: Described recurrently in literature in >= 3 individuals",
      },
      {
        criterium: "CA2",
        description: "Novel Fusion but with known 5' Partner: 5' gene partner described with other 3' partner genes in cancer.",
      },
      {
        criterium: "CA3",
        description: "Novel Fusion in an NTRK-associated tumor: Novel 5' gene partner not described as a fusion gene partner elsewhere.",
      },
      {
        criterium: "CV",
        description: "One or more published cases demonstrating therapeutic response to targeted NTRK inhibition.",
      },
      {
        criterium: "FS1",
        description: "In vitro or in vivo evidence of signaling pathway activation, transformation or oncogenesis.",
      },
      {
        criterium: "FS2",
        description: "Supporting evidence of increased expression of kinase partner (RNAseq, IHC).",
      },
      {
        criterium: "FSN",
        description: "Confirmed lack of expression of the NTRK gene in the fusion at BOTH the RNA and protein levels.",
      },
    ],
  },
  {
    name: "AMP/ASCO/CAP Category",
    version: "1",
    published_on: Date.parse("2017-01-19"),
    specification_type: :amp_tiers,
    assertion_type: :Predictive,
    specification_url: "https://pubmed.ncbi.nlm.nih.gov/27993330/",
    sop_pubmed_id: 27993330,
    specification_criteria: [
      {
        criterium: "Tier I - Level A",
        description: "Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines, for a specific type of tumor.",
      },
      {
        criterium: "Tier I - Level B",
        description: "Biomarkers showing therapeutic response in a specific type of tumor based on well-powered studies with consensus from experts in the field.",
      },
      {
        criterium: "Tier II - Level C",
        description: "FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus.",
      },
      {
        criterium: "Tier II - Level D",
        description: "Biomarkers that show plausible therapeutic significance based on preclinical studies.",
      },
      {
        criterium: "Tier III",
        description: "Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers.",
      },
      {
        criterium: "Tier IV",
        description: "Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation.",
      },
      {
        criterium: "Not Applicable",
        description: "Not Applicable",
      },
    ],
  },
  {
    name: "AMP/ASCO/CAP Category",
    version: "1",
    published_on: Date.parse("2017-01-19"),
    specification_type: :amp_tiers,
    assertion_type: :Prognostic,
    specification_url: "https://pubmed.ncbi.nlm.nih.gov/27993330/",
    sop_pubmed_id: 27993330,
    specification_criteria: [
      {
        criterium: "Tier I - Level A",
        description: "Biomarkers included in professional guidelines as prognostic for a specific type of tumor.",
      },
      {
        criterium: "Tier I - Level B",
        description: "Biomarkers of prognostic significance for a specific type of tumor based on well-powered studies with consensus from experts in the field.",
      },
      {
        criterium: "Tier II - Level C",
        description: "Biomarkers of prognostic significance based on the results of multiple small studies.",
      },
      {
        criterium: "Tier II - Level D",
        description: "Biomarkers that may assist disease prognosis themselves or along with other biomarkers based on small studies or a few case reports.",
      },
      {
        criterium: "Tier III",
        description: "Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers.",
      },
      {
        criterium: "Tier IV",
        description: "Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation.",
      },
      {
        criterium: "Not Applicable",
        description: "Not Applicable",
      },
    ],
  },
  {
    name: "AMP/ASCO/CAP Category",
    version: "1",
    published_on: Date.parse("2017-01-19"),
    specification_type: :amp_tiers,
    assertion_type: :Diagnostic,
    specification_url: "https://pubmed.ncbi.nlm.nih.gov/27993330/",
    sop_pubmed_id: 27993330,
    specification_criteria: [
      {
        criterium: "Tier I - Level A",
        description: "Biomarkers included in professional guidelines as diagnostic for a specific type of tumor.",
      },
      {
        criterium: "Tier I - Level B",
        description: "Biomarkers of diagnostic significance for a specific type of tumor based on well-powered studies with consensus from experts in the field.",
      },
      {
        criterium: "Tier II - Level C",
        description: "Biomarkers of diagnostic significance based on the results of multiple small studies.",
      },
      {
        criterium: "Tier II - Level D",
        description: "Biomarkers that may assist disease diagnosis themselves or along with other biomarkers based on small studies or a few case reports.",
      },
      {
        criterium: "Tier III",
        description: "Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers.",
      },
      {
        criterium: "Tier IV",
        description: "Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation.",
      },
      {
        criterium: "Not Applicable",
        description: "Not Applicable",
      },
    ],
  },
  {
    name: "ClinGen/CGC/VICC Codes",
    version: "1",
    published_on: Date.parse("2022-01-29"),
    specification_type: :clingen_codes,
    assertion_type: :Oncogenic,
    specification_url: "https://pubmed.ncbi.nlm.nih.gov/35101336/",
    sop_pubmed_id: 35101336,
    specification_criteria: ClingenCode.all.map do |code|
      {
        criterium: code.code,
        description: code.description,
      }
    end,
  },
  {
    name: "ACMG/AMP Codes",
    version: "1",
    published_on: Date.parse("2015-03-05"),
    specification_type: :acmg_codes,
    assertion_type: :Predisposing,
    specification_url: "https://pubmed.ncbi.nlm.nih.gov/25741868/",
    sop_pubmed_id: 25741868,
    specification_criteria: AcmgCode.all.map do |code|
      {
        criterium: code.code,
        description: code.description,
      }
    end,
  },
]

specifications.each do |spec|
  criteria = spec.delete(:specification_criteria)
  db_spec = Specification.where(spec).first_or_create!
  criteria.each do |criterium|
    SpecificationCriterium.where(
      specification: db_spec,
      criterium: criterium[:criterium],
      description: criterium[:description]
    ).first_or_create!
  end
end
