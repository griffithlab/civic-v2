module Activities
  class CreateFusionFeature < Base
    attr_reader :feature, :five_prime_gene_id, :three_prime_gene_id, :five_prime_partner_status, :three_prime_partner_status

    def initialize(originating_user:, organization_id:, five_prime_gene_id:, three_prime_gene_id:, five_prime_partner_status:, three_prime_partner_status:)
      super(organization_id: organization_id, user: originating_user)
      @five_prime_gene_id = five_prime_gene_id
      @three_prime_gene_id = three_prime_gene_id
      @five_prime_partner_status = five_prime_partner_status
      @three_prime_partner_status = three_prime_partner_status
    end

    private
    def create_activity
      @activity = CreateFeatureActivity.new(
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::CreateFusionFeature.new(
        five_prime_gene_id: five_prime_gene_id,
        three_prime_gene_id: three_prime_gene_id,
        five_prime_partner_status: five_prime_partner_status,
        three_prime_partner_status: three_prime_partner_status,
        originating_user: user,
        organization_id: organization&.id
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end

      @feature = cmd.feature
      events << cmd.events
    end

    def linked_entities
      nil
    end

    def after_actions
      activity.subject = feature
      activity.save!
    end
  end
end
