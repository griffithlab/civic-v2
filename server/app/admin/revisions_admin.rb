Trestle.resource(:revisions) do
  remove_action :destroy
  menu do
    item :revisions, icon: "fa fa-edit"
  end

  scope :all
  scope :new, -> { Revision.where(status: "new") }, default: true

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :subject
    column :status do |revision|
      status_tag(revision.status)
    end
    column :field_name
    column :current_value
    column :suggested_value
    column :revisor
  end

  # Customize the form fields shown on the new/edit views.
  form do |revision|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 4) do
        static_field :subject do
          "#{revision.subject_type} #{revision.subject_id}"
        end
      end
      col(sm: 4) do
        static_field :revisor do
          link_to revision.revisor.username, UsersAdmin.instance_path(revision.revisor)
        end
      end
      col(sm: 2) do
        static_field :status
      end
    end

    row do
      col(sm: 2) { text_field :field_name }
      col(sm: 5) { text_area :current_value }
      col(sm: 5) { text_area :suggested_value }
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
  #   params.require(:revision).permit(:name, ...)
  # end
end
