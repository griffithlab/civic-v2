class VariantCategory < ApplicationRecord
  delegated_type :category_instance, types: %w[ VariantCateogories::Gene ]
  has_and_belongs_to_many :variant_category_aliases, class_name: 'VariantCategories::VariantCategoryAlias'
  has_and_belongs_to_many :sources

  has_many :variants
end
