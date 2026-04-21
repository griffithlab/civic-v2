Trestle.resource(:specifications) do
  collection do
    Specification.eager_load(:organization).order(id: :asc)
  end

  search do |q|
    if q
      collection.where("specifications.name ILIKE ?", "%#{q}%")
    else
      collection
    end
  end

  menu do
    item :specifications, icon: "fa fa-clipboard-list"
  end

  scope :all, default: true
  scope :amp_tiers, -> { Specification.where(specification_type: "amp_tiers") }
  scope :clingen_codes, -> { Specification.where(specification_type: "clingen_codes") }
  scope :acmg_codes, -> { Specification.where(specification_type: "acmg_codes") }

  table do
    column :id
    column :name
    column :specification_type do |spec|
      status_tag(spec.specification_type)
    end
    column :assertion_type do |spec|
      status_tag(spec.assertion_type)
    end
    column :organization do |spec|
      spec.organization&.name
    end
    column :version
    column :published_on
  end

  form do |specification|
    tab :specification do
      text_field :name

      row do
        col(sm: 6) do
          specification_types = Specification.specification_types.keys.map { |t| [ t, t ] }
          select :specification_type, specification_types
        end
        col(sm: 6) do
          assertion_types = Specification.assertion_types.keys.map { |t| [ t, t ] }
          select :assertion_type, assertion_types
        end
      end

      collection_select :organization_id, Organization.order(:name), :id, :name, include_blank: "(None)"

      text_field :specification_url
      text_field :version

      row do
        col(sm: 6) { date_field :published_on }
        col(sm: 6) { number_field :sop_pubmed_id }
      end

      divider

      row do
        col { datetime_field :created_at, readonly: true }
        col { datetime_field :updated_at, readonly: true }
      end
    end

    tab :criteria, badge: specification.specification_criterium.count do
      table SpecificationCriteriaAdmin.table, collection: specification.specification_criterium.order(:id)

      unless specification.new_record?
        concat admin_link_to(
          icon("fa fa-plus") + " Add Criterium",
          admin: :specification_criteria,
          action: :new,
          params: { specification_criterium: { specification_id: specification.id } },
          class: "btn btn-success mt-3"
        )
      end
    end
  end
end
