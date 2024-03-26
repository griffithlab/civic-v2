#Conversion from a GraphQL VariantFields input object to Variant model type
class InputAdaptors::GeneVariantInputAdaptor
  attr_reader :input

  def initialize(variant_input_object: )
    @input = variant_input_object
  end

  def perform
    Variant.new(
      feature_id: input.feature_id,
      name: input.name,
      variant_type_ids: input.variant_type_ids,
      reference_build: input.reference_build,
      ensembl_version: input.ensembl_version,
      variant_alias_ids: get_alias_ids(),
      hgvs_description_ids: get_hgvs_ids(),
      clinvar_entry_ids: get_clinvar_ids(),
      representative_transcript: input.primary_coordinates.representative_transcript,
      chromosome: input.primary_coordinates.chromosome,
      start: input.primary_coordinates.start,
      stop: input.primary_coordinates.stop,
      reference_bases: input.reference_bases,
      variant_bases: input.variant_bases,
      representative_transcript2: input.secondary_coordinates.representative_transcript,
      chromosome2: input.secondary_coordinates.chromosome,
      start2: input.secondary_coordinates.start,
      stop2: input.secondary_coordinates.stop,
    )
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      VariantAlias.get_or_create_by_name(a).id
    end
  end

  def get_hgvs_ids
    input.hgvs_descriptions.map do |hgvs|
      existing = HgvsDescription.where('description ILIKE ?', hgvs).first
      if existing
        existing.id
      else
        HgvsDescription.create!(description: hgvs).id
      end
    end
  end

  def get_clinvar_ids
    clinvar = input.clinvar_ids
    if clinvar.none_found
      return [
        ClinvarEntry.find_by!(clinvar_id: 'NONE FOUND').id
      ]
    elsif clinvar.not_applicable
      return [
        ClinvarEntry.find_by!(clinvar_id: 'N/A').id
      ]
    else
      return clinvar.ids.map do |id|
        ClinvarEntry.get_or_create_by_id(id).id
      end
    end
  end
end
