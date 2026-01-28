module Features
  class Fusion < ActiveRecord::Base
    include Subscribable
    include IsFeatureInstance

    belongs_to :five_prime_gene, class_name: "Features::Gene", optional: true
    belongs_to :three_prime_gene, class_name: "Features::Gene", optional: true

    enum :five_prime_partner_status, {
      known: "known",
      unknown: "unknown",
      multiple: "multiple",
    }, prefix: true

    enum :three_prime_partner_status, {
      known: "known",
      unknown: "unknown",
      multiple: "multiple",
    }, prefix: true

    has_many :variant_groups
    has_many :source_suggestions

    # TODO - move to feature?
    has_many :comment_mentions, foreign_key: :comment_id, class_name: "EntityMention"

    validate :partner_status_valid_for_gene_ids
    validate :at_least_one_gene_id

    def partner_status_valid_for_gene_ids
      if !self.in_revision_validation_context
        [ self.five_prime_gene, self.three_prime_gene ].zip([ self.five_prime_partner_status, self.three_prime_partner_status ], [ :five_prime_gene, :three_prime_gene ]).each do |gene, status, fk|
          if gene.nil? && status == "known"
            errors.add(fk, "Partner status cannot be 'known' if the gene isn't set")
          elsif !gene.nil? && status != "known"
            errors.add(fk, "Partner status has to be 'known' if gene is set")
          end
        end
      end
    end

    def at_least_one_gene_id
      if !self.in_revision_validation_context && self.five_prime_gene_id.nil? && self.three_prime_gene_id.nil?
        errors.add(:base, "One or both of the genes need to be set")
      end
    end

    def display_name
      name
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

    def generate_name
      five_prime_name = Features::Fusion.construct_fusion_partner_name(self.five_prime_gene_id, self.five_prime_partner_status)
      three_prime_name = Features::Fusion.construct_fusion_partner_name(self.three_prime_gene_id, self.three_prime_partner_status)
      "#{five_prime_name}::#{three_prime_name}"
    end

    def self.construct_fusion_partner_name(gene_id, partner_status)
      if partner_status == "known"
        Features::Gene.find(gene_id).name
      elsif partner_status == "unknown"
        "?"
      elsif partner_status == "multiple"
        "v"
      end
    end
  end
end
