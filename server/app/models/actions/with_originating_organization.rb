module Actions
  module WithOriginatingOrganization
    def resolve_organization(user, organization_id)
      if organization_id.nil?
        if user.organizations.count == 1
          user.organizations.first
        elsif user.organizations.count > 1
          raise "User #{user.id} belongs to multiple organizations but no organization for action was submitted."
        else
          nil
        end
      else
        Organization.find(organization_id)
      end
    end
  end
end
