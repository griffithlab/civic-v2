module Actions
  class CreateComplexMolecularProfile
    include Actions::Transactional

    attr_reader :variants, :structure, :molecular_profile, :mp_name, :originating_user, :organization_id

    def initialize(variants:, structure:, originating_user:, organization_id: nil)
      @variants = variants
      @structure = structure
      @originating_user = originating_user
      @organization_id = organization_id
      @mp_name = Actions::GenerateMolecularProfileName.generate_name(structure: structure)
    end

    private
    def execute
      if existing_mp = MolecularProfile.find_by(name: mp_name)
        if existing_mp.variant_ids.sort == variants.map(&:id).sort
          @molecular_profile = existing_mp
        else
          raise StandardError.new("Found existing molecular profile with same name #{mp_name} but different variant list")
        end
      else
        mp = MolecularProfile.where(name: mp_name).first_or_initialize

        mp.variants = variants
        mp.evidence_score = 0
        mp.save!

        event = Event.new(
          action: "complex molecular profile created",
          originating_user: originating_user,
          organization_id: organization_id,
          subject: mp,
          originating_object: mp,
        )

        events << event

        @molecular_profile = mp
      end
      # TODO: do we want to subscribe the creating user to the mp?
    end
  end
end
