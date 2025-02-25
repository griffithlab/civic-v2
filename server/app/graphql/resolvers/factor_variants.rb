class Resolvers::FactorVariants < Resolvers::Shared::Variants
  type Types::Variants::FactorVariantType.connection_type, null: false

  description "List and filter Gene variants."

  scope { object.variants.where(deprecated: false).order("variants.name ASC").distinct }
end
