module Types::Entities
  class CoiType < Types::BaseObject
    field :coi_present, Boolean, null: false
    field :coi_statement, String, null: true
    field :coi_status, String, null: false #TODO: turn this into an enum
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :expires_at, GraphQL::Types::ISO8601DateTime, null: false

    def coi_status
      if object.nil?
        'missing'
      elsif object.expired?
        'expired'
      elsif object.coi_present?
        'conflict'
      else
        'valid'
      end
    end
  end
end
