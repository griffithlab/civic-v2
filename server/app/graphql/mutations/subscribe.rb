class Mutations::Subscribe < Mutations::BaseMutation
  argument :subscribables, [Types::SubscribableInput], required: true
  argument :subscribe_to_children, Boolean, required: false, default_value: false

  field :subscriptions, [Types::SubscriptionType], null: false

  def ready?(**_)
    validate_user_logged_in

    return true
  end

  def resolve(subscribables:, subscribe_to_children:)
    subscriptions = subscribables.flat_map do |s|
      s.subscribe_user(context[:current_user], subscribe_to_children: subscribe_to_children)
    end

    {
      subscriptions: subscriptions
    }
  end
end
