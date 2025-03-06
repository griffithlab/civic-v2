module Types::Revisions
  class RevisionStatus < Types::BaseEnum
    value "NEW", value: "new"
    value "REJECTED", value: "rejected"
    value "ACCEPTED", value: "accepted"
    value "SUPERSEDED", value: "superseded"
  end
end
