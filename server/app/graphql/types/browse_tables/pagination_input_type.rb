module Types::BrowseTables
  class PaginationInputType < Types::BaseInputObject
    argument :page, Int, default_value: 1, required: false
    argument :limit, Int, default_value: 25, required: false
  end
end
