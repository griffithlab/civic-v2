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
