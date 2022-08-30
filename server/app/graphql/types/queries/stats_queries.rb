module Types::Queries
  module StatsQueries
    class NameWithCount < Types::BaseObject
      field :name, String, null: false
      field :count, Int, null: false
      field :link, String, null: false
    end

    class GenesByVariantsCountsAndTotals < Types::BaseObject
      field :counts, [NameWithCount], null: false
      field :gene_count, Int, null: false
      field :variant_count, Int, null: false
    end


    def self.included(klass)
      klass.field :top_genes_by_variants, GenesByVariantsCountsAndTotals, null: false

      def top_genes_by_variants
        top_genes = Variant.includes(:gene).joins(molecular_profiles: [:evidence_items])
           .where("evidence_items.status != 'rejected'")
           .where("variants.deprecated = ?", false)
           .where("molecular_profiles.deprecated = false")
           .group(:gene_id)
           .select("variants.gene_id, count(distinct(variants.id)) as variant_count")
           .order('variant_count  desc')
           .first(9)

         covered_count = 0
         counts = top_genes.map do |v|
           covered_count += v.variant_count
           {
             name: v.gene.name,
             link: v.gene.link,
             count: v.variant_count
           }
         end
         total_variants = Variant.joins(molecular_profiles: [:evidence_items]).where("evidence_items.status != 'rejected'").where("variants.deprecated = ?", false).where("molecular_profiles.deprecated = false").distinct.count
         counts << {
           name: 'Other',
           count: total_variants - covered_count,
           link: Rails.application.routes.url_helpers.url_for("/genes"),
         }

         {
           counts: counts,
           gene_count: Gene.joins(variants: [molecular_profiles: [:evidence_items]])
           .where("evidence_items.status != 'rejected'").where("variants.deprecated = FALSE").where("molecular_profiles.deprecated = FALSE").distinct.count,
           variant_count: total_variants
         }
      end
    end
  end
end

