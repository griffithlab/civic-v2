module Actions
  class CreateFusionFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id, :create_variant, :five_prime_partner_status, :three_prime_partner_status

    def initialize(originating_user:, five_prime_gene_id:, three_prime_gene_id:, five_prime_partner_status:, three_prime_partner_status:, organization_id: nil, create_variant: true)
      five_prime_name = Features::Fusion.construct_fusion_partner_name(five_prime_gene_id, five_prime_partner_status)
      three_prime_name = Features::Fusion.construct_fusion_partner_name(three_prime_gene_id, three_prime_partner_status)
      feature_name = "#{five_prime_name}::#{three_prime_name}"

      @feature = Feature.new(
        name: feature_name,
      )
      Features::Fusion.create(
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
      if five_prime_partner_status == "known"
        variant.five_prime_start_exon_coordinates = ExonCoordinate.generate_stub(variant, "Five Prime Start Exon Coordinate")
        variant.five_prime_end_exon_coordinates = ExonCoordinate.generate_stub(variant, "Five Prime End Exon Coordinate")
        variant.five_prime_coordinates = VariantCoordinate.generate_stub(variant, "Five Prime Fusion Coordinate")
      end
      if three_prime_partner_status == "known"
        variant.three_prime_end_exon_coordinates = ExonCoordinate.generate_stub(variant, "Three Prime End Exon Coordinate")
        variant.three_prime_start_exon_coordinates = ExonCoordinate.generate_stub(variant, "Three Prime Start Exon Coordinate")
        variant.three_prime_coordinates = VariantCoordinate.generate_stub(variant, "Three Prime Fusion Coordinate")
      end
    end

    private
    def execute
      feature.save!

      event = Event.new(
        action: "feature created",
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
