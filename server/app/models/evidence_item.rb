class EvidenceItem < ActiveRecord::Base
  include Subscribable

  belongs_to :variant
  belongs_to :molecular_profile
  belongs_to :disease
  has_and_belongs_to_many :drugs
end
