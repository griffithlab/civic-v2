module Types::Commentable
  class CommentableEntitiesType < Types::BaseEnum
    value 'GENE'
    value 'VARIANT'
    value 'EVIDENCE_ITEM'
    value 'ASSERTION'
    value 'VARIANT_GROUP'
    value 'SOURCE'
  end
end
