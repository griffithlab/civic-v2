#TODO REMOVE ME
class SuggestedChange < ApplicationRecord
  include Commentable
  #TODO REMOVE THESE
  serialize :suggested_changes, JSON
  belongs_to :moderated, polymorphic: true
  belongs_to :user
end