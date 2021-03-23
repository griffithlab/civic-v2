class Organization < ActiveRecord::Base
  has_many :events
  has_many :affiliations
  has_many :users, through: :affiliations

  has_one_attached :profile_image
  validates :profile_image, content_type: ['image/png', 'image/jpg', 'image/jpeg'],
    size: { less_than: 5.megabytes , message: 'Image must be smaller than 15MB' }

  #TODO: stats hash
  #TODO: org membership helper methods
  #TODO: only allow one level of nesting
  #TODO: Parent/child org relationships
end
