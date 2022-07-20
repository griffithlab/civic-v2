module Actions
  class CreateVariant
    include Actions::Transactional

    attr_reader :variant, :molecular_profile

    def initialize(variant_name:, gene_id:)
      @variant = Variant.new(name: variant_name, gene_id: gene_id, civic_actionability_score: 0)
    end

    private
    def execute
      variant.save!(validate: false) #get the ID for use in MP name generation
      mp_name = Actions::GenerateMolecularProfileName.generate_single_variant_mp_name(variant: variant)
      mp = MolecularProfile.where(name: mp_name).first_or_create!

      variant.single_variant_molecular_profile = mp
      variant.save! #actually validate
      mp.variants = [variant]
      mp.save!

      @molecular_profile = mp
    end
  end
end
