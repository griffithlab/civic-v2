module Commentable
  extend ActiveSupport::Concern
  included do
    has_many :comments, as: :commentable

    has_one :last_comment_event,
      ->() { where(action: "commented").includes(:originating_user).order("created_at DESC") },
      as: :subject,
      class_name: "Event"
  end
end
