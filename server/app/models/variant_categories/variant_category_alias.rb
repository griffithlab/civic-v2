class VariantCategories::VariantCategoryAlias < ActiveRecord::Base
  has_and_belongs_to_many :variant_categories
end
