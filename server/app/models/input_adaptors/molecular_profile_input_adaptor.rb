class InputAdaptors::MolecularProfileInputAdaptor
  attr_reader :input, :raw_name

  def initialize(mp_input_object:, existing_name: )
    @input = mp_input_object
    @raw_name = existing_name
  end

  def perform
    MolecularProfile.new(
      common_name: input.common_name,
      description: input.description,
      source_ids: input.source_ids,
      molecular_profile_alias_ids: get_alias_ids(),
      raw_name: raw_name
    )
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      MolecularProfileAlias.get_or_create_by_name(a).id
    end
  end
end
