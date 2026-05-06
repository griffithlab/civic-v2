module Types::Revisions
  class ClinvarInputType < Types::BaseInputObject
    description <<~DOC.strip
    An input object representing possible ClinVar ID states.
    You may specify either one or more Integer IDs OR either none found or not applicable.
    DOC

    argument :ids, [ Int ], description: "The ClinVar ID(s)", required: false
    argument :none_found, Boolean, required: false
    argument :not_applicable, Boolean, required: false

    validates required: {
      one_of: [ :ids, :none_found, :not_applicable ],
      message: "May specify either a list of ids or None/NA but not multiple",
    }
  end
end
