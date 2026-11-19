class ClingenCode < ApplicationRecord
  has_and_belongs_to_many :assertions
end
