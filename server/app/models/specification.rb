class Specification < ApplicationRecord
  include Graph::HasGraphStructure

  belongs_to :organization, optional: true
  has_many :specification_criteria

  enum :specification_type, {
    amp_tiers: "amp_tiers",
    clingen_codes: "clingen_codes",
    acmg_codes: "acmg_codes",
  }, suffix: true

  enum :evaluation_method, {
    all_strength: "all_strength",
    all_flowchart: "all_flowchart",
    one: "one",
  }, suffix: true

  enum :assertion_type, {
    Diagnostic: "Diagnostic",
    Prognostic: "Prognostic",
    Predictive: "Predictive",
    Predisposing: "Predisposing",
    Oncogenic: "Oncogenic",
  }
end
