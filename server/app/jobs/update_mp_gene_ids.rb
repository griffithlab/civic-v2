class UpdateMpGeneIds < ApplicationJob
  attr_reader :variant, :regex

  def perform(variant)
    @variant = variant
    @regex = Regexp.new(
      MolecularProfile::GENE_REGEX.source + " #VID#{variant.id}",
      Regexp::IGNORECASE
    )

    variant.molecular_profiles.each do |mp|
      check_and_rename(mp)
    end
  end

  private
  def check_and_rename(mp)
    possible_new_name = mp.name.gsub(regex, current_name)
    if possible_new_name != mp.name
      mp.name = possible_new_name
      mp.save!
    end
  end

  def current_name
    @current_name ||= "#GID#{variant.gene.id} #VID#{variant.id}"
  end
end
