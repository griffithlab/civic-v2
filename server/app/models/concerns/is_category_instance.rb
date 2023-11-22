module IsCategoryInstance
  extend ActiveSupport::Concern


  included do
    has_one :variant_category, as: :category_instance, touch: true

    delegate :name, to: :variant_category
    delegate :description, to: :variant_category
    delegate :variant_category_aliases, to: :variant_category
    delegate :sources, to: :variant_category
  end
end
