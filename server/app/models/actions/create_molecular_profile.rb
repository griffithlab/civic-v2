module Actions
  class CreateMolecularProfile
    include Actions::Transactional

    attr_reader :variants, :structure, :molecular_profile

    def initialize(variants:, structure:)
      @variants = variants
      @structure = structure
    end

    private
    def execute
      name = Actions::GenerateMolecularProfileName.generate_name(structure: structure)
      mp = MolecularProfile.where(name: name).first_or_create!
      mp.variants = variants
      mp.save
      @molecular_profile = mp
      #TODO: do we need an event here?
      #TODO: do we want to subscribe the creating user to the mp?
    end

  end
end
