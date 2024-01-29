module Features
  class Factor < ActiveRecord::Base
    include Subscribable
    include IsFeatureInstance

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
