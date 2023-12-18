module IsFeatureInstance
  extend ActiveSupport::Concern

  included do
    has_one :feature, as: :feature_instance, touch: true

    delegate :name, to: :feature
    delegate :description, to: :feature
    delegate :feature_aliases, to: :feature
    delegate :sources, to: :feature
    delegate :variants, to: :feature

    delegate :flagged, to: :feature
    delegate :flags, to: :feature
    delegate :most_recent_flag, to: :feature

    delegate :comments, to: :feature
    delegate :last_comment_event, to: :feature
  end
end
