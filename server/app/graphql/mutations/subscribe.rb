class Mutations::Subscribe < Mutations::BaseMutation
  description 'Subscribe to a CIViC entity in order to receive notifications about it.'

  argument :subscribables, [Types::SubscribableInput], required: true,
    description: 'A list of one or more entities to subscribe to.'

  argument :subscribe_to_children, Boolean, required: false,
    default_value: false,
    description: <<~DOC.strip
      Do you want to subscribe to related child entities of the subscribed entities?
      IE: If you subscribe to a Gene, do you want to receive notifications for its Variants as well?
    DOC

  field :subscriptions, [Types::SubscriptionType], null: false,
    description: 'The newly created subscription objects.'

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
