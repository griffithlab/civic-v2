class FeatureAlias < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_and_belongs_to_many :features

  def display_name
    name
  end

  def self.get_or_create_by_name(name)
    if found = self.where("lower(name) = ?", name.downcase).first
      found
    else
      self.create!(name: name)
    end
  end
end
