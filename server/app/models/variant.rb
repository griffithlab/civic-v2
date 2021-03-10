class Variant < ActiveRecord::Base
  belongs_to :gene
  has_many :evidence_items
  has_many :assertions
end
