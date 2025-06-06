module Types
  class OrganizationFilterType < Types::BaseInputObject
    description "Filter on organization id and whether or not to include the organization's subgroups"

    argument :ids, [ Int ], required: false, description: "An array of Organization IDs. If any ID matches, the result will be returned."

    argument :name, String, required: false, description: "The organization name."

    argument :include_subgroups, Boolean,
      required: false,
      default_value: false,
      description: "Whether or not to include the organization's subgroup."
  end
end
