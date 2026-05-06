module Types
  class NotificationReasonType < Types::BaseEnum
    value "MENTION", value: "mention"
    value "SUBSCRIPTION", value: "subscribed_event"
  end
end
