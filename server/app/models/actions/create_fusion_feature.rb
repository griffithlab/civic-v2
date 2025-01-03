module Actions
  class CreateFusionFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id, :create_variant, :five_prime_partner_status, :three_prime_partner_status, :regulatory_fusion_type

    def initialize(originating_user:, five_prime_gene_id:, three_prime_gene_id:, five_prime_partner_status:, three_prime_partner_status:, regulatory_fusion_type:, organization_id: nil, create_variant: true)
      feature_name = "#{construct_fusion_partner_name(five_prime_gene_id, five_prime_partner_status)}::#{construct_fusion_partner_name(three_prime_gene_id, three_prime_partner_status)}"
      @feature = Feature.new(
        name: feature_name,
      )
      Features::Fusion.create(
        five_prime_gene_id: five_prime_gene_id,
        three_prime_gene_id: three_prime_gene_id,
        five_prime_partner_status: five_prime_partner_status,
        three_prime_partner_status: three_prime_partner_status,
        regulatory_fusion_type: regulatory_fusion_type,
        feature: feature,
      )
      @five_prime_partner_status = five_prime_partner_status
      @three_prime_partner_status = three_prime_partner_status
      @regulatory_fusion_type = regulatory_fusion_type
      @originating_user = originating_user
      @organization_id = organization_id
      @create_variant = create_variant
    end

    def construct_fusion_partner_name(gene_id, partner_status)
      if partner_status == 'known'
        Features::Gene.find(gene_id).name
      elsif partner_status == 'regulatory'
        gene_name = Features::Gene.find(gene_id).name
        rft = Features::Fusion.format_regulatory_fusion_type(regulatory_fusion_type)
        "#{rft}@#{gene_name}"
      elsif partner_status == 'unknown'
        '?'
      elsif partner_status == 'multiple'
        'v'
      end
    end

    def create_representative_variant
      stubbed_variant = Variants::FusionVariant.new(
        feature: feature,
        name: Constants::REPRESENTATIVE_FUSION_VARIANT_NAME
      )

      vicc_compliant_name = stubbed_variant.generate_vicc_name

      cmd = Actions::CreateVariant.new(
        variant_name: stubbed_variant.name,
        feature_id: feature.id,
        originating_user: originating_user,
        organization_id: organization_id,
        additional_attrs: { vicc_compliant_name: vicc_compliant_name }
      )
      cmd.perform

      variant = cmd.variant
      stub_remaining_coordinates(variant)

      if cmd.errors.any?
        errors.each do |err|
          errors << err
        end
      end

      events << cmd.events
    end

    def stub_remaining_coordinates(variant)
      if five_prime_partner_status == 'known'
        variant.five_prime_start_exon_coordinates = ExonCoordinate.generate_stub(variant, 'Five Prime Start Exon Coordinate')
        variant.five_prime_end_exon_coordinates = ExonCoordinate.generate_stub(variant, 'Five Prime End Exon Coordinate')
        variant.five_prime_coordinates = VariantCoordinate.generate_stub(variant, 'Five Prime Fusion Coordinate')
      end
      if three_prime_partner_status == 'known'
        variant.three_prime_end_exon_coordinates = ExonCoordinate.generate_stub(variant, 'Three Prime End Exon Coordinate')
        variant.three_prime_start_exon_coordinates = ExonCoordinate.generate_stub(variant, 'Three Prime Start Exon Coordinate')
        variant.three_prime_coordinates = VariantCoordinate.generate_stub(variant, 'Three Prime Fusion Coordinate')
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

      if create_variant
        create_representative_variant
      end
      events << event
    end
  end
end
