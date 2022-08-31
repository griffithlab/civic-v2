module Types::Queries
  module StatsQueries
    class NameWithCount < Types::BaseObject
      field :name, String, null: false
      field :count, Int, null: false
      field :link, String, null: true
    end

    class CountsAndTotals < Types::BaseObject
      field :counts, [NameWithCount], null: false
      field :total, Int, null: true
      field :secondary_total, Int, null: true
    end

    class CountsAndTotalWithKey < Types::BaseObject
      field :key, String, null: false
      field :counts, CountsAndTotals, null: false
    end

    class EvidenceTypeCounts < Types::BaseObject
      field :evidence_type_counts, CountsAndTotals, null: false
      field :clinical_significance_counts, [CountsAndTotalWithKey], null: false
      field :support_counts, [CountsAndTotalWithKey], null: false
      field :does_not_support_counts, [CountsAndTotalWithKey], null: false
    end


    def self.included(klass)
      klass.field :top_genes_by_variants, CountsAndTotals, null: false
      klass.field :evidence_type_counts, EvidenceTypeCounts, null: false
      klass.field :evidence_level_counts, [NameWithCount], null: false
      klass.field :evidence_rating_counts, [NameWithCount], null: false

      def evidence_level_counts
        EvidenceItem.joins(:molecular_profile)
          .where(molecular_profiles: { deprecated: false })
          .group(:evidence_level)
          .select("evidence_items.evidence_level, count(distinct(evidence_items.id)) as evidence_count")
          .map do |eid|
            {
              name: eid.evidence_level,
              count: eid.evidence_count,
            }
          end
      end

      def evidence_rating_counts
        EvidenceItem.joins(:molecular_profile)
          .where(molecular_profiles: { deprecated: false })
          .where.not(rating: nil)
          .group(:rating)
          .select("evidence_items.rating, count(distinct(evidence_items.id)) as evidence_count")
          .map do |eid|
            {
              name: eid.rating,
              count: eid.evidence_count,
            }
          end
      end


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

        subset_counts = []
        support_subset_counts = []
        does_not_support_subset_counts = []
        counts = []
        eid_counts_by_type.each do |eid|
          counts << {
            name: eid.evidence_type,
            count: eid.evidence_count
          }
          subset = EvidenceItem.joins(:molecular_profile)
            .where("evidence_items.status != 'rejected'")
            .where("molecular_profiles.deprecated = false")
            .where("evidence_items.evidence_type = ?", EvidenceItem.evidence_types[eid.evidence_type])
            .group(:clinical_significance)
            .select("
              evidence_items.clinical_significance,
              count(distinct(evidence_items.id)) as evidence_count,
              count(distinct(evidence_items.id)) filter (where evidence_items.evidence_direction = #{EvidenceItem.evidence_directions['Supports']}) as support_count,
              count(distinct(evidence_items.id)) filter (where evidence_items.evidence_direction = #{EvidenceItem.evidence_directions['Does Not Support']}) as does_not_support_count
            ")
            .order("evidence_count desc")

          counts_for_subset = []
          support_counts_for_subset = []
          does_not_support_counts_for_subset = []
          subset.each do |eids_for_type|
            counts_for_subset << {
              name: eids_for_type.clinical_significance,
              count: eids_for_type.evidence_count,
            }
            support_counts_for_subset << {
              name: eids_for_type.clinical_significance,
              count: eids_for_type.support_count,
            }
            does_not_support_counts_for_subset << {
              name: eids_for_type.clinical_significance,
              count: eids_for_type.does_not_support_count,
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
          support_subset_counts << {
            key: eid.evidence_type,
            counts: {
              counts: support_counts_for_subset,
            }
          }
          does_not_support_subset_counts << {
            key: eid.evidence_type,
            counts: {
              counts: does_not_support_counts_for_subset,
            }
          }
        end

        {
          evidence_type_counts: {
            counts: counts,
            total: EvidenceItem.joins(:molecular_profile).where("evidence_items.status != 'rejected'").where("molecular_profiles.deprecated = false").distinct.count
          },
          clinical_significance_counts: subset_counts,
          support_counts: support_subset_counts,
          does_not_support_counts: does_not_support_subset_counts,
        }
      end
    end
  end
end

