module Actions
  class CreateFusionFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id

    def initialize(originating_user:, five_prime_gene_id:, three_prime_gene_id:, five_prime_partner_status:, three_prime_partner_status:, organization_id: nil)
      feature_name = "#{construct_fusion_partner_name(five_prime_gene_id, five_prime_partner_status)}::#{construct_fusion_partner_name(three_prime_gene_id, three_prime_partner_status)}"
      fusion = Features::Fusion.create(
        five_prime_gene_id: five_prime_gene_id,
        three_prime_gene_id: three_prime_gene_id,
        five_prime_partner_status: five_prime_partner_status,
        three_prime_partner_status: three_prime_partner_status,
      )
      @feature = Feature.new(
        name: feature_name,
        feature_instance: fusion
      )
      @originating_user = originating_user
      @organization_id = organization_id
    end

    def construct_fusion_partner_name(gene_id:, partner_status:)
      if partner_status == 'known'
        Feature::Gene.find(gene_id).name
      elsif partner_status == 'unknown'
        '?'
      elsif partner_status == 'multiple'
        'v'
      end
    end

    private
    def execute
      feature.save!

      event = Event.new(
        action: 'feature created',
        originating_user: originating_user,
        subject: feature,
        organization_id: organization_id,
        originating_object: feature
      )

      events << event

    end
  end
end
