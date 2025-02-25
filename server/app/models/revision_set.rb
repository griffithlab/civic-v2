class RevisionSet < ApplicationRecord
  include Subscribable
  include WithActivities

  has_activity :creation_activity, activity_type: "SuggestRevisionSetActivity"

  has_many :revisions

  def display_name
    "RSID#{id}"
  end

  def name
    "RSID#{id}"
  end

  def link
    "TODO"
  end
end
