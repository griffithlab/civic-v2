Trestle.resource(:therapies) do
  remove_action :destroy

  menu do
    item :therapies, icon: "fa fa-pills"
  end

  scope :all, default: true
  scope :without_ncit_id, -> { Therapy.where(ncit_id: nil) }
  scope :deprecated, -> { Therapy.where(deprecated: true) }
  scope :not_deprecated, -> { Therapy.where(deprecated: false) }

  search do |q|
    if q
      query_id = q.to_i.to_s == q ? q.to_i : nil
      if query_id
        collection.where("name ILIKE ? OR ncit_id ILIKE ? OR id = ?", "%#{q}%", "%#{q}%", query_id)
      else
        collection.where("name ILIKE ? OR ncit_id ILIKE ?", "%#{q}%", "%#{q}%")
      end
    else
      collection
    end
  end

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :ncit_id
    column :name
    column :deprecated
  end

  # Customize the form fields shown on the new/edit views.
  form do |drug|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 2) { text_field :ncit_id }
      col(sm: 2) do
        form_group :deprecated, label: false do
          check_box :deprecated
        end
      end
    end

    col(sm: 6) { text_field :name }

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
  #   params.require(:drug).permit(:name, ...)
  # end
end
