module Actions
  class CreateComplexMolecularProfile
    include Actions::Transactional

    attr_reader :variants, :structure, :molecular_profile, :mp_name

    def initialize(variants:, structure:)
      @variants = variants
      @structure = structure
      @mp_name = Actions::GenerateMolecularProfileName.generate_name(structure: structure)
    end

    private
    def execute
      if existing_mp = MolecularProfile.find_by(name: mp_name)
        if existing_mp.variant_ids.sort == variants.map(&:id).sort
          @molecular_profile = existing_mp
        else
          raise StandardError.new("Found existing molecular profile with same name #{name} but different variant list")
        end
      else
        mp = MolecularProfile.where(name: mp_name).first_or_initialize
        
        mp.variants = variants
        mp.evidence_score = 0
        mp.save!

        @molecular_profile = mp
      end
      #TODO: do we want to subscribe the creating user to the mp?
    end
  end
end
