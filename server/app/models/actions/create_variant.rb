module Actions
  class CreateVariant
    include Actions::Transactional

    attr_reader :variant, :molecular_profile, :originating_user, :organization_id

    def initialize(variant_name:, gene_id:, originating_user:, organization_id: nil)
      @variant = Variant.new(name: variant_name, gene_id: gene_id)
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      variant.save!(validate: false) #get the ID for use in MP name generation
      mp_name = Actions::GenerateMolecularProfileName.generate_single_variant_mp_name(variant: variant)
      mp = MolecularProfile.where(name: mp_name).first_or_initialize

      if mp.evidence_score.blank?
        mp.evidence_score = 0
      end

      mp.save!

      variant.single_variant_molecular_profile = mp
      variant.save! #actually validate
      mp.variants = [variant]
      mp.save!

      event = Event.new(
        action: 'variant created',
        originating_user: originating_user,
        subject: variant,
        organization_id: organization_id,
        originating_object: variant
      )

      events << event

      @molecular_profile = mp
    end
  end
end
