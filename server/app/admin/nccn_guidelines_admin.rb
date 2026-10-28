Trestle.resource(:nccn_guidelines) do
  remove_action :destroy

  collection do
    NccnGuideline.order(:name)
  end

  menu do
    item :nccn_guidelines, label: "NCCN Guidelines", icon: "fa fa-book-medical"
  end

  search do |q|
    if q
      collection.where("nccn_guidelines.name ILIKE ?", "%#{q}%")
    else
      collection
    end
  end

  scope :all, default: true

  table do
    column :id
    column :name
  end

  form do |_guideline|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 10) { text_field :name }
    end
  end
end
