module Features
  class Fusion < ActiveRecord::Base
    include Subscribable
    include IsFeatureInstance

    belongs_to :five_prime_gene, class_name: "Features::Gene", optional: true
    belongs_to :three_prime_gene, class_name: "Features::Gene", optional: true

    enum :five_prime_partner_status, Constants::FUSION_PARTNER_STATUSES, prefix: true
    enum :three_prime_partner_status, Constants::FUSION_PARTNER_STATUSES, prefix: true

    enum :regulatory_fusion_type, Constants::REGULATORY_FUSION_ENUM_TYPES

    has_many :variant_groups
    has_many :source_suggestions

    # TODO - move to feature?
    has_many :comment_mentions, foreign_key: :comment_id, class_name: "EntityMention"

    validates_with FusionFeatureValidator

    def display_name
      name
    end

    def self.format_regulatory_fusion_type(rft)
      if rft == "enhancer"
        "reg_e"
      elsif rft == "promoter"
        "reg_p"
      else
        "reg_#{rft}"
      end
    end

    def editable_fields
      [
        :description,
        :source_ids,
        :feature_alias_ids,
      ]
    end

    def compatible_variant_type
      Variants::FusionVariant
    end
  end
end
