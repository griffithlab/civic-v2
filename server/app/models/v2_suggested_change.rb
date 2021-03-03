class V2SuggestedChange < ApplicationRecord
  belongs_to :subject, polymorphic: true

  #TODO: will we want a mixin someday?
  has_many :events, as: :originating_object

  validates :status, inclusion: {
    in: ['applied', 'rejected', 'superseded', 'new'],
    message: "%{value} is not a valid suggested change status"
  },
  allow_blank: false


  def suggesting_user
    events
      .where(action: 'change suggested')
      .first
      .originating_user
  end
end
