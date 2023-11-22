module Types::VariantCategories
  class FactorType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::MolecularProfileComponent
  end
end
