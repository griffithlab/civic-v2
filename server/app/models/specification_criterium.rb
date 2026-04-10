class SpecificationCriterium < ApplicationRecord
  belongs_to :specification
  has_and_belongs_to_many :assertions
end
