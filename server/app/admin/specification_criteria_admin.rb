Trestle.resource(:specification_criteria) do
  collection do
    SpecificationCriterium.eager_load(:specification).order(id: :asc)
  end

  search do |q|
    if q
      collection.where("specification_criteria.criterium ILIKE ?", "%#{q}%")
        .or(collection.where("specifications.name ILIKE ?", "%#{q}%"))
    else
      collection
    end
  end

  table autolink: false do
    column :criterium
    column :description
    column :point_value
    actions do |toolbar, _criterium, _admin|
      toolbar.edit
      toolbar.delete
    end
  end

  form modal: true do |criterium|
    if criterium.new_record?
      hidden_field :specification_id
      static_field :specification do
        Specification.find_by(id: criterium.specification_id || params.dig(:specification_criterium, :specification_id))&.name
      end
    else
      static_field :specification do
        criterium.specification&.name
      end
    end

    text_field :criterium
    text_area :description
    number_field :point_value

    divider

    row do
      col { datetime_field :created_at, readonly: true }
      col { datetime_field :updated_at, readonly: true }
    end
  end

  params do |params|
    params.require(:specification_criterium).permit(:specification_id, :criterium, :description, :point_value)
  end
end
