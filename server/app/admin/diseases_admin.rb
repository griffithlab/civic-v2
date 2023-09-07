Trestle.resource(:diseases) do
  collection do
    Disease.eager_load(:disease_aliases)
  end

  menu do
    item :diseases, icon: "fa fa-disease"
  end

  search do |q|
    q ? collection.where("diseases.doid ILIKE ? OR diseases.name ILIKE ? OR disease_aliases.name ILIKE ?", "%#{q}%", "%#{q}%", "%#{q}%") : collection
  end

  scope :all, default: true
  scope :without_doid, -> { Disease.where(doid: nil) }

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :doid
    column :name
    column :aliases do |disease|
      disease.disease_aliases.map(&:name).join(", ")
    end
  end

  # Customize the form fields shown on the new/edit views.
  form do |disease|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 2) { text_field :doid }
    end

    row do
      col(sm: 6) { text_field :name }
      col(sm: 6) { text_field :display_name }
    end

    divider

    row do
      col { datetime_field :created_at, readonly: true }
      col { datetime_field :updated_at, readonly: true }
    end
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:disease).permit(:name, ...)
  # end
end
