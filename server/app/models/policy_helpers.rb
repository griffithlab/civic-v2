module PolicyHelpers
  #def self.editor_without_coi?(user)
    #Role.user_is_at_least_a?(user, :editor) &&
      #valid_coi_statement(user)
  #end

  #def self.valid_coi_statement(user)
    #statement = user.most_recent_conflict_of_interest_statement
    #statement.present? && !statement.expired?
  #end

  def self.can_act_for_org?(user:, organization_id: nil)
    #The user is acting on behalf of an org of which they're a member
    if organization_id.present? && user.organization_ids.include?(organization_id)
      true
    #The user is acting on behalf of an org of which they're not a member
    elsif organization_id.present? && !user.organization_ids.include?(organization_id)
      false
    #The user is not acting on behalf of an org
    else
      true
    end
  end
end

