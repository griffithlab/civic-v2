module Actions
  class CreateMolecularProfile
    include Actions::Transactional

    attr_reader :variants, :structure, :molecular_profile, :mp_name

    def initialize(variants:, structure: nil)
      @variants = variants
      @structure = structure
      if structure.nil?
        if variants.size == 1
          @mp_name = Actions::GenerateMolecularProfileName.generate_single_variant_mp_name(variant: variants.first)
        else
          raise StandardError.new("Must provide a molecular profile structure object for a multi variant mp")
        end
      else
        @mp_name = Actions::GenerateMolecularProfileName.generate_name(structure: structure)
      end
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
        mp = MolecularProfile.where(name: mp_name).first_or_create!
        mp.variants = variants
        mp.save!
        @molecular_profile = mp
      end
      #TODO: do we want to subscribe the creating user to the mp?
    end

  end
end
