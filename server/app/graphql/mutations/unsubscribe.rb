class Mutations::Unsubscribe < Mutations::BaseMutation
  description "Unsubscribe from a CIViC entity to stop receiving notifications about it."

  argument :subscribables, [ Types::Subscribable::SubscribableInput ], required: true,
    description: "A list of one or more entities to unsubscribe from, each identified by its ID and type."

  argument :unsubscribe_from_children, Boolean, required: false,
    default_value: false,
    description: <<~DOC.strip
      Do you also wish to stop receiving notifications from child entities?
      IE: If you unsubscribe from a Gene do you want to stop receiving notifications for its Variants as well?
    DOC

  field :unsubscribed_entities, [ Types::Entities::SubscribableType ], null: false,
    description: "The entities that were unsubscribed from."

  def ready?(**_)
    validate_user_logged_in

    return true
  end

  def resolve(subscribables:, unsubscribe_from_children:)
    unsubscribed_entities = subscribables.flat_map do |s|
      s.unsubscribe_user(context[:current_user], unsubscribe_from_children: unsubscribe_from_children)
    end

    {
      unsubscribed_entities: unsubscribed_entities,
    }
  end
end
