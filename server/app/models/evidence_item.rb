class EvidenceItem < ActiveRecord::Base
  belongs_to :variant
  belongs_to :disease
  has_and_belongs_to_many :drugs
end
