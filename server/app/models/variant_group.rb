class VariantGroup < ApplicationRecord
  searchkick highlight: [:name]

  def search_data
    {
      name: name
    }
  end
end
