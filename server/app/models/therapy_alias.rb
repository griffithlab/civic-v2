class TherapyAlias < ActiveRecord::Base
  has_and_belongs_to_many :therapies
  validates :name, presence: true, uniqueness: true
end
