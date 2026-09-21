require "test_helper"

class AssertionSpecificationValidationTest < ActiveSupport::TestCase
  test "passes when only one of of multiple incompatible codes is 'met'" do
    assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:oncogenic_assertion))
    eval1 = specification_evaluations(:clingen_assertion_om1)
    eval1.evaluation = "met"
    eval1.assertion = assertion
    eval1.save

    eval2 = specification_evaluations(:clingen_assertion_os1)
    eval2.evaluation = "not_met"
    eval2.assertion = assertion
    eval2.save

    assert assertion.valid?, "Codes are mutually exclusive but only one is met - this is okay"
  end

  test "fails validation when at least one code is mutually exclusive" do
    assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:accepted_assertion))
    eval1 = specification_evaluations(:clingen_assertion_om1)
    eval1.evaluation = "met"
    eval1.assertion = assertion
    eval1.save

    eval2 = specification_evaluations(:clingen_assertion_os1)
    eval2.evaluation = "met"
    eval2.assertion = assertion
    eval2.save

    assert_validation_error(assertion, "specification", /code .+ is incompatible with/i)
  end
end
