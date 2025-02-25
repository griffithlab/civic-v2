module Activities
  class CreateComplexMolecularProfile < Base
    attr_reader :variants, :structure, :molecular_profile

    def initialize(originating_user:, organization_id:, variants:, structure:)
      super(organization_id: organization_id, user: originating_user)
      @variants = variants
      @structure = structure
    end

    private
    def create_activity
      @activity = CreateComplexMolecularProfileActivity.new(
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::CreateComplexMolecularProfile.new(
        variants: variants,
        structure: structure,
        originating_user: user,
        organization_id: organization&.id
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end

      @molecular_profile = cmd.molecular_profile
      events << cmd.events
    end

    def linked_entities
    end

    def after_actions
      activity.subject = molecular_profile
      activity.save!
    end
  end
end
