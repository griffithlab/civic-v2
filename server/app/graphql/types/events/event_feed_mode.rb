module Types::Events
  class EventFeedMode < Types::BaseEnum
    description 'The context of an event feed, i.e. what is the root subject of the feed. This option is a no-op when accessing events via a parent.'
    value 'USER', value: :user
    value 'ORGANIZATION', value: :organization
    value 'SUBJECT', value: :subject
    value 'UNSCOPED', value: :unscoped
  end
end
