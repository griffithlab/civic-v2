class VariantGroup < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable

  has_many :variant_group_variants
  has_many :variants, through: :variant_group_variants
  has_many :comment_mentions, foreign_key: :comment_id, class_name: "EntityMention"
  has_many :sources_variant_groups, class_name: "SourceVariantGroup"
  has_many :sources, through: :sources_variant_groups

  searchkick highlight: [ :name ], callbacks: :async

  def search_data
    {
      name: name,
    }
  end

  def link
    Rails.application.routes.url_helpers.url_for("/variant-groups/#{self.id}")
  end

  def editable_fields
    [
      :description,
      :source_ids,
      :variant_ids,
      :name,
    ]
  end
end
