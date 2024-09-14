class Resolvers::Variants < Resolvers::Shared::Variants

  type Types::Interfaces::VariantInterface.connection_type, null: false

  description 'List and filter variants.'

  scope { object.variants.where(deprecated: false).order('variants.name ASC').distinct }
end
