class VariantGroup < ActiveRecord::Base 
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable

  has_many :variant_group_variants
  has_many :variants, through: :variant_group_variants
  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

  searchkick highlight: [:name]

  def search_data
    {
      name: name
    }
  end
end
