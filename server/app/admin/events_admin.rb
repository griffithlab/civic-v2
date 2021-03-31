Trestle.resource(:events) do
  menu do
    item :events, icon: "fab fa-elementor"
  end

  scope :all
  scope :unlinkable, -> { Event.where(unlinkable: true) }

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :subject
    column :action
    column :originating_user
    column :organization
    column :created_at
    column :unlinkable
  end

  # Customize the form fields shown on the new/edit views.
  form do |event|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 5) do
        static_field :subject do
          "#{event.subject.class} #{event.subject.id}"
        end
      end
      col(sm: 5) { static_field :action }
    end

    text_area :description

    text_area :state_params

    static_field :originating_user do
      link_to event.originating_user.username, UsersAdmin.instance_path(event.originating_user)
    end

    collection_select :organization_id, Organization.order(:name), :id, :name

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
  #   params.require(:event).permit(:name, ...)
  # end
end
