module Types::Activities
  class CreateSourceLinkActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :source_link, Types::SourceLinkType, null: false

    def source_link
      Loaders::AssociationLoader.for(CreateLinkedSourceActivity, :source_link).load(object)
    end
  end
end
