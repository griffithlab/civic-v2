class SpecificationEvaluation < ApplicationRecord
  belongs_to :assertion
  belongs_to :specification_criterium
  has_and_belongs_to_many :evidence_items

  enum :evaluation, {
    met: "met",
    not_met: "not_met",
    not_evaluated: "not_evaluated",
  }, instance_methods: false, scopes: false

  validate :evidence_items_only_used_on_met_evaluations

  def evidence_items_only_used_on_met_evaluations
    if self.evaluation != "met" and self.evidence_items.any?
      errors.add("Evidence items can only be added to 'met' evaluations")
    end
  end
end
