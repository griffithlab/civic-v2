Trestle.resource(:users) do
  controller do
    include ActiveStorage::SetCurrent
  end

  menu do
    item :users, icon: "fa fa-user"
  end

  scopes do
    User.roles.keys.each do |role|
      scope role.capitalize.pluralize, -> { User.where(role: role) }
    end
    scope "Admins and Editors", -> { User.where(role: [ "admin", "editor" ]) }
  end

  search do |q|
    if q
      query_id = q.to_i.to_s == q ? q.to_i : nil
      if query_id
        collection.where("username ILIKE ? OR name ILIKE ? OR id = ?", "%#{q}%", "%#{q}%", query_id)
      else
        collection.where("username ILIKE ? OR name ILIKE ?", "%#{q}%", "%#{q}%")
      end
    else
      collection
    end
  end

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :username
    column :name
    column :role do |user|
      status_tag(user.role)
    end
  end

  # Customize the form fields shown on the new/edit views.
  form do |user|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 4) { text_field :username }
      col(sm: 4) { text_field :name }
      col(sm: 2) do
        if user.profile_image.attached?
          form_group :profile_image, label: false do
            link_to image_tag(user.profile_image.variant(resize_to_limit: [ 128, 128 ]).processed.url), user.profile_image.variant(resize_to_limit: [ 128, 128 ]).processed.url
          end
        end
      end
    end

    row do
      col(sm: 2) do
        roles = User.roles.map { |role| [ role, role ] }
        select :role, roles
      end
      col(sm: 5) { email_field :email }
      col(sm: 5) { url_field :url }
    end

    text_area :bio

    collection_select :country_id, Country.order(:name), :id, :name, { prompt: "Choose a Country" }, include_blank: true

    select :organization_ids, Organization.order(:name), { label: "Organization" }, multiple: true
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:user).permit(:name, ...)
  # end
end
