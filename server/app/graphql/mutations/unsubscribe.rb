class Mutations::Unsubscribe < Mutations::BaseMutation
  argument :subscribables, [Types::SubscribableInput], required: true
  argument :unsubscribe_from_children, Boolean, required: false, default_value: false

  field :unsubscribed_entities, [Types::SubscribableType], null: false

  def ready?(**_)
    validate_user_logged_in

    return true
  end

  def resolve(subscribables:, unsubscribe_from_children:)
    unsubscribed_entities = subscribables.flat_map do |s|
      s.unsubscribe_user(context[:current_user], unsubscribe_from_children: unsubscribe_from_children)
    end

    {
      unsubscribed_entities: unsubscribed_entities.map do |e|
        {
          id: e.id,
          entity_type: e.class.to_s.underscore.upcase
        }
      end
    }
  end

end
