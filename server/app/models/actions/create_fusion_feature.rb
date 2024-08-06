module Actions
  class CreateFusionFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id, :create_variant

    def initialize(originating_user:, five_prime_gene_id:, three_prime_gene_id:, five_prime_partner_status:, three_prime_partner_status:, organization_id: nil, create_variant: true)
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
      @create_variant = create_variant
    end

    def construct_fusion_partner_name(gene_id, partner_status)
      if partner_status == 'known'
        Features::Gene.find(gene_id).name
      elsif partner_status == 'unknown'
        '?'
      elsif partner_status == 'multiple'
        'v'
      end
    end

    def create_representative_variant
      stubbed_variant = Variants::FusionVariant.new(
        feature: feature,
        name: 'Fusion'
      )

      vicc_compliant_name = stubbed_variant.generate_vicc_name

      cmd = Actions::CreateVariant.new(
        variant_name: 'Fusion',
        feature_id: feature.id,
        originating_user: originating_user,
        organization_id: organization_id,
        additional_attrs: { vicc_compliant_name: vicc_compliant_name }
      )
      cmd.perform

      if cmd.errors.any?
        errors.each do |err|
          errors << err
        end
      end

      events << cmd.events
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

      if create_variant
        create_representative_variant
      end
      events << event
    end
  end
end
