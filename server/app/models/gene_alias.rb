class GeneAlias < ActiveRecord::Base
  has_and_belongs_to_many :genes
end
