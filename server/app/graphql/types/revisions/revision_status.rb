module Types::Revisions
  class RevisionStatus < Types::BaseEnum
    value "new"
    value "rejected"
    value "accepted"
    value "superseded"
  end
end
