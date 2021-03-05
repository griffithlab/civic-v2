class Revision < ApplicationRecord
  include Commentable

  belongs_to :subject, polymorphic: true
  #TODO: will we want a mixin someday?
  has_many :events, as: :originating_object

  validates :status, inclusion: {
    in: ['accepted', 'rejected', 'superseded', 'new'],
    message: "%{value} is not a valid revision status"
  },
  allow_blank: false

  def suggesting_user
    events
      .where(action: 'revision suggested')
      .first
      .originating_user
  end
end
