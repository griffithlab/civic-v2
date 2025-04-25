class EidsWithOnsetTerms < Report
  attr_reader :onset_terms

  def self.name
    "EIDs with Onset Terms"
  end

  def self.description
    "Generate a list of EIDs with any of the following onset terms: Young adult, early young adult, intermediate young adult, late young adult, childhood, juvenile, pediatric, congenital, and infantile."
  end

  def setup
    @onset_terms = Phenotype.where(hpo_class: [
      "Young adult onset",
      "Intermediate young adult onset",
      "Late young adult onset",
      "Childhood onset",
      "Juvenile onset",
      "Pediatric onset",
      "Congenital onset",
      "Infantile onset",
    ])
  end

  def headers
    [
      "EID",
      "Link",
      "HPO Term",
      "HPO ID",
    ]
  end

  def execute
    onset_terms.each do |term|
      term.evidence_items.each do |eid|
        data << [ "EID#{eid.id}", "https://civicdb.org/#{eid.link}", term.hpo_class, term.hpo_id ]
      end
    end
  end
end
