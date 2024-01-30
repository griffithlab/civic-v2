module Features
  class Gene < ActiveRecord::Base
    include Subscribable
    include IsFeatureInstance

    has_many :variant_groups
    has_many :source_suggestions

    #TODO - move to feature?
    has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

    def display_name
      name
    end

    def editable_fields
      [
        :description,
        :source_ids
      ]
    end
  end
end
