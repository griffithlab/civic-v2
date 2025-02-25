# Conversion from a GraphQL VariantFields input object to Variant model type
class InputAdaptors::GeneVariantInputAdaptor
  attr_reader :input

  def initialize(variant_input_object:)
    @input = variant_input_object
  end

  def perform
    Variants::GeneVariant.new(
      feature_id: input.feature_id,
      name: input.name,
      variant_type_ids: input.variant_type_ids,
      variant_alias_ids: get_alias_ids(),
      hgvs_description_ids: get_hgvs_ids(),
      clinvar_entry_ids: get_clinvar_ids(),
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
      existing = HgvsDescription.where("description ILIKE ?", hgvs).first
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
      [
        ClinvarEntry.find_by!(clinvar_id: "NONE FOUND").id
      ]
    elsif clinvar.not_applicable
      [
        ClinvarEntry.find_by!(clinvar_id: "N/A").id
      ]
    else
      clinvar.ids.map do |id|
        ClinvarEntry.get_or_create_by_id(id).id
      end
    end
  end
end
