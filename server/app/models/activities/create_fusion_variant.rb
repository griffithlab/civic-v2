module Activities
  class CreateFusionVariant < Base
    attr_reader :variant_name, :three_prime_start_exon_coords, :five_prime_end_exon_coords, :feature_id, :variant, :molecular_profile, :vicc_name

    def initialize(originating_user:, organization_id:, three_prime_start_exon_coords:, five_prime_end_exon_coords:, civic_name:, vicc_name:, feature_id:)
      super(organization_id: organization_id, user: originating_user)
      @variant_name = civic_name
      @vicc_name = vicc_name
      @five_prime_end_exon_coords = five_prime_end_exon_coords
      @three_prime_start_exon_coords = three_prime_start_exon_coords
      @feature_id = feature_id
    end

    private
    def create_activity
      @activity = CreateVariantActivity.new(
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::CreateVariant.new(
        variant_name: variant_name,
        feature_id: feature_id,
        originating_user: user,
        organization_id: organization&.id,
        additional_attrs: { vicc_compliant_name: vicc_name }
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end

      @variant = cmd.variant
      @molecular_profile = cmd.molecular_profile

      variant.five_prime_end_exon_coordinates = five_prime_end_exon_coords
      variant.three_prime_start_exon_coordinates = three_prime_start_exon_coords
      stub_remaining_coordinates
      variant.save!

      events << cmd.events
    end

    def stub_remaining_coordinates
      if variant.fusion.five_prime_partner_status == 'known'
        variant.five_prime_start_exon_coordinates = ExonCoordinate.generate_stub(variant, 'Five Prime Start Exon Coordinate')
        variant.five_prime_coordinates = VariantCoordinate.generate_stub(variant, 'Five Prime Fusion Coordinate')
      end
      if variant.fusion.three_prime_partner_status == 'known'
        variant.three_prime_end_exon_coordinates = ExonCoordinate.generate_stub(variant, 'Three Prime End Exon Coordinate')
        variant.three_prime_coordinates = VariantCoordinate.generate_stub(variant, 'Three Prime Fusion Coordinate')
      end
    end

    def linked_entities
      molecular_profile
    end

    def after_actions
      activity.subject = variant
      activity.save!
    end
  end
end
