module Types::Entities
  class CoiType < Types::BaseObject
    field :id, Integer, null: false
    field :coi_present, Boolean, null: false
    field :coi_statement, String, null: true
    field :coi_status, Types::CoiStatusType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :expires_at, GraphQL::Types::ISO8601DateTime, null: false

    def coi_status
      if object.nil?
        "MISSING"
      elsif object.expired?
        "EXPIRED"
      elsif object.coi_present?
        "CONFLICT"
      else
        "VALID"
      end
    end
  end
end
