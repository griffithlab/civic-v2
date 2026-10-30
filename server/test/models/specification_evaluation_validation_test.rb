require "test_helper"

class SpecificationValidationTest < ActiveSupport::TestCase
  test "allows evidence to be associated when evaluated (met or not_met)" do
    se = specification_evaluations(:clingen_assertion_os1)
    se.evaluation = "met"
    eid = evidence_items(:accepted_ei)
    se.evidence_items << eid
    se.save

    assert se.valid?, "Evidence allowed to be associated with met"

    se.evaluation = "not_met"
    se.save

    assert se.valid?, "Evidence allowed to be associated with not_met"
  end

  test "fails validation if eids are associated with unevaluated codes" do
    se = specification_evaluations(:clingen_assertion_os1)
    eid = evidence_items(:accepted_ei)
    se.evidence_items << eid
    se.evaluation = "excluded"
    se.save

    assert_validation_error(se, "evidence_items", /Evidence items can only be/i)

    se.evaluation = "not_evaluated"
    se.save

    assert_validation_error(se, "evidence_items", /Evidence items can only be/i)
  end
end
