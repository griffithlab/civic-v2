class ClingenCode < ApplicationRecord
  has_and_belongs_to_many :assertions

  def display_name
    code
  end

  def name
    code
  end
end
