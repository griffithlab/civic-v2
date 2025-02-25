module Types::Entities
  class UserRoleType < Types::BaseEnum
    value "EDITOR", value: "editor"
    value "ADMIN", value: "admin"
    value "CURATOR", value: "curator"
  end
end
