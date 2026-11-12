class SpecificationEvaluation < ApplicationRecord
  include Moderated
  include Subscribable

  belongs_to :assertion
  belongs_to :specification_criterion
  has_and_belongs_to_many :evidence_items

  enum :evaluation, {
    met: "met",
    not_met: "not_met",
    excluded: "excluded",
    not_evaluated: "not_evaluated",
  }, instance_methods: false, scopes: false

  validate :evidence_items_only_on_evaluated_evaluations
  validate :allowed_modifier

  def evidence_items_only_on_evaluated_evaluations
    if self.evaluation != "met" && self.evaluation != "not_met" && self.evidence_items.any?
      errors.add(:evidence_items, "Evidence items can only be added to evaluations that are marked 'met' or 'not_met'")
    end
  end

  def allowed_modifier
    if self.modifier.present? && !self.specification_criterion.modifiers.include?(self.modifier)
      errors.add(:modifier, "Modifier is not an allowed modifier for the selected criterion")
    end
  end

  def editable_fields
    [
      :evaluation,
      :modifier,
      :justification,
      :evidence_item_ids,
      :specification_criterion_id,
    ]
  end
end
