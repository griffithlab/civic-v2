class Resolvers::Contributors < GraphQL::Schema::Resolver
  type Types::ContributingUsersSummary, null: false

  argument :subscribable, Types::Subscribable::SubscribableInput, required: true,
    description: "The entity to to return contributors for"

  def resolve(subscribable:)
    relevant_events = Event.includes(:originating_user)
      .where(subject: subscribable)

    (editor_events, curation_events) = relevant_events.partition { |e| is_editorial_event?(e) }

    editorial_users = Hash.new { |h, k| h[k] = []  }
    curation_users = Hash.new { |h, k| h[k] = [] }

    editor_events.each do |e|
      editorial_users[e.originating_user] << e
    end

    curation_events.each do |e|
      curation_users[e.originating_user] << e
    end

    {
      curators: generate_user_list(curation_users),
      editors: generate_user_list(editorial_users),
    }
  end

  private
  def generate_user_list(users)
    users.map do |user, events|
      {
        user: user,
        unique_actions: events.map(&:action).tally.map { |action, count| { 'action': action, 'count': count } },
        last_action_date: events.map(&:created_at).max,
        total_action_count: events.count,
      }
    end
  end

  def is_editorial_event?(e)
    editorial_events.include?(e.action)
  end

  def editorial_events
    @editorial_events ||= [
      "revision rejected",
      "revision accepted",
      "flag resolved",
      "assertion accepted",
      "assertion rejected",
      "reverted",
      "accepted",
      "rejected",
    ]
  end
end
