module Types::Entities
  class VariantType < Types::BaseObject
    implements Types::Interfaces::VariantInterface
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::MolecularProfileComponent
  end
end
