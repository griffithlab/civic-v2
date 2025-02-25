class Types::ContributingUsersSummary < Types::BaseObject
  field :curators, [ Types::Entities::ContributingUser ], null: false
  field :editors, [ Types::Entities::ContributingUser ], null: false
end
