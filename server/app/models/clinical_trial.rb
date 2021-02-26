class ClinicalTrial < ActiveRecord::Base
  has_and_belongs_to_many :sources
end
