Trestle.resource(:affiliations) do
  remove_action :new

  menu do
    item :affiliations, icon: "fa fa-address-card", priority: :last
  end

  collection do
    Affiliation.eager_load(:user, :organization)
  end

  search do |q|
    if q
      query_id = q.to_i.to_s == q ? q.to_i : nil
      if query_id
        collection.where("users.name ILIKE ? OR organizations.name ILIKE ? OR affiliations.id = ?", "%#{q}%", "%#{q}%", query_id)
      else
        collection.where("users.name ILIKE ? OR organizations.name ILIKE ?", "%#{q}%", "%#{q}%")
      end
    else
      collection
    end
  end

  scope :all, default: true
  scope :with_endorsement_permissions, -> {  Affiliation.eager_load(:user, :organization).where(can_endorse: true) }

  # Customize the table columns shown on the index view.
  table do
    column :user do |a|
      a.user.display_name
    end
    column :organization do |a|
      a.organization.name
    end
    column :can_endorse
  end

  # Customize the form fields shown on the new/edit views.
  form do |affiliation|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 2) do
        static_field :user do
          affiliation.user.display_name end
      end
      col(sm: 2) do
        static_field :organization do
          affiliation.organization.name end
      end
    end
    row do
      col { check_box :can_endorse, label: "User Allowed to Endorse Assertions for this Organization" }
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
