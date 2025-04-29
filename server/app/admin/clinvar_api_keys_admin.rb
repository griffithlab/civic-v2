Trestle.resource(:clinvar_api_keys) do
  collection do
    ClinvarApiKey.eager_load(:organization)
  end

  menu do
    item :clinvar_api_keys, icon: "fa fa-key"
  end

  search do |q|
    q ? collection.where("organizations.name ILIKE ? OR clinvar_api_keys.note ILIKE ?", "%#{q}%", "%#{q}%") : collection
  end

  scope :all, default: true
  scope :active, -> { ClinvarApiKey.eager_load(:organization).where(active: true) }
  scope :inactive, -> { ClinvarApiKey.eager_load(:organization).where(active: false) }

  table do
    column :organization
    column :api_key
    column :note
    column :star_rating
    column :active
  end

  # Customize the form fields shown on the new/edit views.
  form do |api_key|
    row do
      col(sm: 8) do
        select :organization_id, Organization.order(:name), { label: "Organization" }, multiple: false
      end
    end

    row do
      col(sm: 10) { text_field :api_key }
    end

    text_area :note

    row do
      col(sm: 1) do
        ratings = [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] ]
        select :star_rating, ratings
      end
    end

    row do
      col { check_box :active, label: "Use this API Key for automated ClinVar submissions" }
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
  #   params.require(:organization).permit(:name, ...)
  # end
end
