module Features
  class Factor < ActiveRecord::Base
    include Subscribable
    include IsFeatureInstance

    # TODO - move to feature?
    has_many :comment_mentions, foreign_key: :comment_id, class_name: "EntityMention"

    def display_name
      name
    end

    def editable_fields
      [
        :name,
        :full_name,
        :description,
        :ncit_id,
        :source_ids,
        :feature_alias_ids
      ]
    end

    def compatible_variant_type
      Variants::FactorVariant
    end
  end
end
