class MolecularProfile < ActiveRecord::Base
  has_and_belongs_to_many :variants
  has_many :evidence_items
end
