module Types::Revisions
  class GeneFields < Types::BaseInputObject
    argument :description, String, required: true,
      description: "The Gene's description/summary text."
    argument :source_ids, [Int], required: true,
      description: "Source IDs cited by the Gene's summary."
  end
end
