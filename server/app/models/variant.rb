class Variant < ActiveRecord::Base
  include Subscribable
  include Moderated

  belongs_to :gene
  has_many :evidence_items
  has_many :assertions
end
