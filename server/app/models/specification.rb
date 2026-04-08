class Specification < ApplicationRecord
  belongs_to :organization, optional: true
  has_many :specification_criterium

  enum :specification_type, {
    amp_tiers: "amp_tiers",
    clingen_codes: "clingen_codes",
    acmg_codes: "acmg_codes",
  }

  enum :assertion_type, {
    Diagnostic: "Diagnostic",
    Prognostic: "Prognostic",
    Predictive: "Predictive",
    Predisposing: "Predisposing",
    Oncogenic: "Oncogenic",
  }
end
