Trestle.resource(:clingen_codes) do
  collection do
    ClingenCode.all.order(code: :asc)
  end

  search do |q|
    q ? collection.where("clingen_codes.code ILIKE ? OR clingen_codes.description ILIKE ?", "%#{q}%", "%#{q}%") : collection
  end

  remove_action :destroy, :new

  menu do
    item :clingen_codes, icon: "fas fa-project-diagram", priority: :last
  end

  scope :all

  # Customize the table columns shown on the index view.
  table do
    column :code
    column :description, truncate: false
  end

  # Customize the form fields shown on the new/edit views.
  form do |code|
      row do
        col(sm: 2) { static_field :code }
      end

      text_area :description
    end
  end
