module Types::Commentable
  class TaggableEntity < Types::BaseEnum
    value 'GENE'
    value 'VARIANT'
    value 'VARIANT_GROUP'
    value 'EVIDENCE_ITEM'
    value 'ASSERTION'
    value 'REVISION'
    value 'USER'
    value 'ORGANIZATION'
  end
end
