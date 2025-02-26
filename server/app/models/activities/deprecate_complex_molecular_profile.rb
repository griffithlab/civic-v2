module Activities
  class DeprecateComplexMolecularProfile < Base
    attr_reader :molecular_profile, :deprecation_reason

    def initialize(deprecating_user:, molecular_profile:, organization_id: nil, deprecation_reason:, note:)
      super(organization_id: organization_id, user: deprecating_user, note: note)
      @molecular_profile = molecular_profile
      @deprecation_reason = deprecation_reason
    end

    private
    def create_activity
      @activity = DeprecateComplexMolecularProfileActivity.create!(
        subject: molecular_profile,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::DeprecateComplexMolecularProfile.new(
        deprecating_user: user,
        molecular_profile: molecular_profile,
        organization_id: organization&.id,
        deprecation_reason: deprecation_reason
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
    end

    def linked_entities
      []
    end
  end
end
