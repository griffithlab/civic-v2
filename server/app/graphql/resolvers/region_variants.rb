class Resolvers::RegionVariants < Resolvers::Shared::Variants
  type Types::Variants::RegionVariantType.connection_type, null: false

  description "List and filter Region variants."

  scope { object.variants.where(deprecated: false).order("variants.name ASC").distinct }
end
