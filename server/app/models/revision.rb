class Revision < ApplicationRecord
  include Commentable

  belongs_to :subject, polymorphic: true
  #TODO: will we want a mixin someday?
  has_many :events, as: :originating_object

  has_one :creation_event,
    ->() { where(action: 'revision suggested') },
    as: :originating_object,
    class_name: 'Event'

  validates :status, inclusion: {
    in: ['accepted', 'rejected', 'superseded', 'new'],
    message: "%{value} is not a valid revision status"
  },
  allow_blank: false

  searchkick highlight: [:id]

  def revisor
    events
      .where(action: 'revision suggested')
      .first
      .originating_user
  end


  def search_data
    {
      id: name
    }
  end

  def name
    "RID#{self.id}"
  end
end
