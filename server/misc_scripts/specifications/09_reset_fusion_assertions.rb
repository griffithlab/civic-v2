civicbot_user = User.find(Constants::CIVICBOT_USER_ID)

Assertion.where(assertion_type: 'Oncogenic').all.select { |a| [ 14, 16 ].include?(a.submission_activity.organization_id) }.each do |assertion|
  evaluations = assertion.specification_evaluations
  met_evaluations = evaluations.select { |e| e.evaluation == 'met' }
  if met_evaluations.count == 1
    met_evaluation = met_evaluations.first
    if met_evaluation.specification_criterion.criterion == "N/A"
      if assertion.status == "accepted"
        cmd = Activities::ModerateAssertion.new(
          assertion: assertion,
          originating_user: civicbot_user,
          organization_id: nil,
          new_status: "submitted",
          note: "Reverting Assertion to submitted because of programmatical removal of 'N/A' oncogenicity evaluation.",
        )
        res = cmd.perform
        if !res.succeeded?
          raise StandardError.new(res.errors.join(", "))
        end
      end
      evaluations.each do |e|
        e.destroy
      end
    end
  end
end
