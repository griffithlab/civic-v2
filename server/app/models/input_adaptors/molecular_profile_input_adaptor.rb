class InputAdaptors::MolecularProfileInputAdaptor
  attr_reader :input, :name

  def initialize(mp_input_object:, existing_name:)
    @input = mp_input_object
    @name = existing_name
  end

  def perform
    MolecularProfile.new(
      description: input.description,
      source_ids: input.source_ids,
      molecular_profile_alias_ids: get_alias_ids(),
      name: name
    )
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      MolecularProfileAlias.get_or_create_by_name(a).id
    end
  end
end
