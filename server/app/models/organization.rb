class Organization < ActiveRecord::Base
  has_many :events
  has_many :affiliations
  has_many :users, through: :affiliations
  
  #TODO: profile images
  #TODO: stats hash
  #TODO: org membership helper methods
  #TODO: only allow one level of nesting
end
