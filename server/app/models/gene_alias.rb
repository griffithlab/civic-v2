class GeneAlias < ActiveRecord::Base
  has_and_belongs_to_many :genes, class_name: 'VariantCategories::Gene'
end
