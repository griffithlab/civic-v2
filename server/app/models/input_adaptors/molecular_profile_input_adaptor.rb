class InputAdaptors::MolecularProfileInputAdaptor
  attr_reader :input, :name

  def initialize(mp_input_object:, existing_name: )
    @input = mp_input_object
    @name = existing_name
  end

  def perform
    MolecularProfile.new(
      description: input.description,
      source_ids: input.source_ids,
      name: name
    )
  end
end
