class Assertion < ActiveRecord::Base
  include Subscribable
  belongs_to :gene
  belongs_to :variant
  has_and_belongs_to_many :evidence_items
end
