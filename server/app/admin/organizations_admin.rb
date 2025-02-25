Trestle.resource(:organizations) do
  controller do
    include ActiveStorage::SetCurrent
  end

  menu do
    item :organizations, icon: "fa fa-users"
  end

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :name
  end

  # Customize the form fields shown on the new/edit views.
  form do |organization|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 8) { text_field :name }
      col(sm: 2) do
        if organization.profile_image.attached?
          form_group :profile_image, label: false do
            link_to image_tag(organization.profile_image.variant(resize_to_limit: [ 128, 128 ]).processed.url), organization.profile_image.variant(resize_to_limit: [ 128, 128 ]).processed.url
          end
        end
      end
    end

    select :parent_id, [ nil ] + Organization.all

    url_field :url

    text_area :description

    file_field :profile_image
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
