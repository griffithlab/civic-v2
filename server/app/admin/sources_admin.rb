Trestle.resource(:sources) do
  remove_action :destroy, :new

  collection do
    Source.eager_load(:authors, :clinical_trials)
  end

  menu do
    item :sources, icon: "fa fa-book"
  end

  search do |q|
    if q
      query_id = q.to_i.to_s == q ? q.to_i : nil
      if query_id
        collection.where("sources.citation_id ILIKE ? OR sources.citation ILIKE ? OR sources.id = ?", "%#{q}%", "%#{q}%", query_id)
      else
        collection.where("sources.citation_id ILIKE ? OR sources.citation ILIKE ?", "%#{q}%", "%#{q}%")
      end
    else
      collection
    end
  end

  scope :all, default: true
  scope :deprecated, -> { Source.where(deprecated: true) }
  scope :not_deprecated, -> { Source.where(deprecated: false) }

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :source_type
    column :citation_id, header: "Citation ID"
    column :citation
    column :title
    column :authors do |source|
      source.authors.map{|a| "#{a.last_name}, #{a.fore_name}"}.join(", ")
    end
    column :clinical_trials do |source|
      source.clinical_trials.map(&:nct_id).join(", ")
    end
    column :deprecated
  end

  # Customize the form fields shown on the new/edit views.
  form do |disease|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 2) { static_field :source_type }
      col(sm: 2) { static_field :citation_id, label: "Citation ID" }
      col(sm: 2) do
        form_group :deprecated, label: false do
          check_box :deprecated
        end
      end
    end

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
