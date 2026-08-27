class SpecificationEvaluation < ApplicationRecord
  belongs_to :assertion
  belongs_to :specification_criterium

  enum :evaluation, {
    met: "met",
    not_met: "not_met",
    not_evaluated: "not_evaluated",
  }, instance_methods: false, scopes: false
end
