Trestle.resource(:flags) do
  remove_action :destroy
  remove_action :update
  remove_action :new

  menu do
    item :flags, icon: "fa fa-flag"
  end

  scope :all
  scope :open, -> { Flag.where(state: "open") }, default: true

   # Customize the table columns shown on the index view.
   table do
     column :id
     column :flaggable
     column :flagging_user
     column :resolving_user
     column :state do |flag|
       status_tag(flag.state)
     end
   end

  # Customize the form fields shown on the new/edit views.
  form do |flag|
    row do
      col(sm: 1) { static_field :id }
      col(sm: 5) do
        static_field :flaggable do
          "#{flag.flaggable.class} #{flag.flaggable.id}"
        end
      end
      col(sm: 5) do
        static_field :state
      end
    end

    row do
      col(sm: 6) do
        static_field :flagging_user do
          link_to flag.flagging_user.username, UsersAdmin.instance_path(flag.flagging_user)
        end
      end
      if flag.resolving_user
        col(sm: 6) do
          static_field :resolving_user do
            link_to flag.resolving_user.username, UsersAdmin.instance_path(flag.resolving_user)
          end
        end
      end
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
  #   params.require(:flag).permit(:name, ...)
  # end
end
