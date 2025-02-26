class SourceSuggestion < ActiveRecord::Base
  include Subscribable
  include WithActivities

  belongs_to :source
  belongs_to :user
  belongs_to :disease, optional: true
  belongs_to :molecular_profile, optional: true

  validates :status, inclusion: { in: [ "new", "curated", "rejected" ] }

  has_activity :creation_activity, activity_type: "SuggestSourceActivity"
  has_activity :last_status_update_activity, activity_type: "UpdateSourceSuggestionStatusActivity"
end
