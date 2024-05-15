module Features
  class Fusion < ActiveRecord::Base
    include Subscribable
    include IsFeatureInstance

    belongs_to :five_prime_gene, class_name: 'Features::Gene', optional: true
    belongs_to :three_prime_gene, class_name: 'Features::Gene', optional: true

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

    def compatible_variant_type
      Variants::FusionVariant
    end
  end
end
