module Types::Events
  class EventSubjectWithCount < Types::BaseObject
    description "An event subject paired with a count of how many times that subject has appeared"
    field :subject, Types::Interfaces::EventSubject, null: true
    field :occurance_count, Int, null: false
  end
end
