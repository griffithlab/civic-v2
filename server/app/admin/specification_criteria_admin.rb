Trestle.resource(:specification_criteria) do
  collection do
    SpecificationCriterion.eager_load(:specification).order(id: :asc)
  end

  search do |q|
    if q
      collection.where("specification_criteria.criterion ILIKE ?", "%#{q}%")
        .or(collection.where("specifications.name ILIKE ?", "%#{q}%"))
    else
      collection
    end
  end

  table autolink: false do
    column :criterion
    column :description
    column :point_value
    actions do |toolbar, _criterion, _admin|
      toolbar.edit
      toolbar.delete
    end
  end

  form modal: true do |criterion|
    if criterion.new_record?
      hidden_field :specification_id
      static_field :specification do
        Specification.find_by(id: criterion.specification_id || params.dig(:specification_criterion, :specification_id))&.name
      end
    else
      static_field :specification do
        criterion.specification&.name
      end
    end

    text_field :criterion
    text_area :description
    number_field :point_value

    divider

    row do
      col { datetime_field :created_at, readonly: true }
      col { datetime_field :updated_at, readonly: true }
    end
  end

  params do |params|
    params.require(:specification_criterion).permit(:specification_id, :criterion, :description, :point_value)
  end
end
