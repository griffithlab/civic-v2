Trestle.resource(:news_items) do
  menu do
    group :tools do
      item :news, icon: "fa fa-newspaper"
    end
  end

  scope :all, default: true
  scope :published, -> { NewsItem.where(published: true) }
  scope :unpublished, -> { NewsItem.where(published: false) }

  table do
    column :title
    column :published
    column :published_at
    column :created_at
  end

  form do |news_item|
    row do
      col(sm: 5) do
        text_field :title
        check_box :published
      end
    end

    divider

    row do
      col { rich_text_area :content }
    end

    divider

    row do
      col { datetime_field :published_at, label: "Publication Date" }
    end
  end
end
