module Types::Queries
  module StatsQueries
    class NameWithCount < Types::BaseObject
      field :name, String, null: false
      field :count, Int, null: false
      field :link, String, null: true
    end

    class CountsAndTotals < Types::BaseObject
      field :counts, [NameWithCount], null: false
      field :total, Int, null: false
      field :secondary_total, Int, null: true
    end

    class CountsAndTotalWithKey < Types::BaseObject
      field :key, String, null: false
      field :counts, CountsAndTotals, null: false
    end

    class CountsAndTotalsWithSubset < Types::BaseObject
      field :primary_counts, CountsAndTotals, null: false
      field :subset_counts, [CountsAndTotalWithKey], null: false
    end


    def self.included(klass)
      klass.field :top_genes_by_variants, CountsAndTotals, null: false
      klass.field :evidence_type_counts, CountsAndTotalsWithSubset, null: false

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
           total: Gene.joins(variants: [molecular_profiles: [:evidence_items]])
           .where("evidence_items.status != 'rejected'").where("variants.deprecated = FALSE").where("molecular_profiles.deprecated = FALSE").distinct.count,
           secondary_total: total_variants
         }
      end

      def evidence_type_counts
        eid_counts_by_type = EvidenceItem.joins(:molecular_profile)
          .where("evidence_items.status != 'rejected'")
          .where("molecular_profiles.deprecated = false")
          .group(:evidence_type)
          .select("evidence_items.evidence_type, count(distinct(evidence_items.id)) as evidence_count")
          .order("evidence_count desc")

        counts_for_subset = []
        subset_counts = []
        counts = []
        eid_counts_by_type.map do |eid|
          counts << {
            name: eid.evidence_type,
            count: eid.evidence_count
          }
          subset = EvidenceItem.joins(:molecular_profile)
            .where("evidence_items.status != 'rejected'")
            .where("molecular_profiles.deprecated = false")
            .where("evidence_items.evidence_type = ?", EvidenceItem.evidence_types[eid.evidence_type])
            .group(:clinical_significance)
            .select("evidence_items.clinical_significance, count(distinct(evidence_items.id)) as evidence_count")
            .order("evidence_count desc")

          counts_for_subset = subset.map do |eids_for_type|
            {
              name: eids_for_type.clinical_significance,
              count: eids_for_type.evidence_count,
            }
          end
          subset_counts << {
            key: eid.evidence_type,
            counts: {
              counts: counts_for_subset,
              total: EvidenceItem.joins(:molecular_profile)
                .where("evidence_items.status != 'rejected'")
                .where("molecular_profiles.deprecated = false")
              .where("evidence_items.evidence_type = ?", EvidenceItem.evidence_types[eid.evidence_type]).distinct.count
            }
          }
        end

        {
          primary_counts: {
            counts: counts,
            total: EvidenceItem.joins(:molecular_profile).where("evidence_items.status != 'rejected'").where("molecular_profiles.deprecated = false").distinct.count
          },
          subset_counts: subset_counts
        }
      end
    end
  end
end

