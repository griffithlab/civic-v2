module Actions
  class CreateFusionFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id, :create_variant, :five_prime_partner_status, :three_prime_partner_status

    def initialize(originating_user:, five_prime_gene_id:, three_prime_gene_id:, five_prime_partner_status:, three_prime_partner_status:, organization_id: nil, create_variant: true)
      feature_name = "#{construct_fusion_partner_name(five_prime_gene_id, five_prime_partner_status)}::#{construct_fusion_partner_name(three_prime_gene_id, three_prime_partner_status)}"
      @feature = Feature.new(
        name: feature_name,
      )
      fusion = Features::Fusion.create(
        five_prime_gene_id: five_prime_gene_id,
        three_prime_gene_id: three_prime_gene_id,
        five_prime_partner_status: five_prime_partner_status,
        three_prime_partner_status: three_prime_partner_status,
        feature: feature,
      )
      @five_prime_partner_status = five_prime_partner_status
      @three_prime_partner_status = three_prime_partner_status
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
      variant_name = if five_prime_partner_status == 'unknown' || three_prime_partner_status == 'unknown'
                       'Rearrangement'
                     else
                       'Fusion'
                     end
      stubbed_variant = Variants::FusionVariant.new(
        feature: feature,
        name: variant_name
      )

      vicc_compliant_name = stubbed_variant.generate_vicc_name

      cmd = Actions::CreateVariant.new(
        variant_name: variant_name,
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
