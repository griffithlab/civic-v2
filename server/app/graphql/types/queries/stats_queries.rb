module Types::Queries
  module StatsQueries
    class NameWithCount < Types::BaseObject
      field :name, String, null: false
      field :count, Int, null: false
      field :link, String, null: true
      field :id, Int, null: true
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

    class CountsWithKey < Types::BaseObject
      field :key, String, null: false
      field :counts, [NameWithCount], null: false
    end

    class SeriesWithKey < Types::BaseObject
      field :key, String, null: false
      field :series, [CountsWithKey], null: false
    end

    class EvidenceTypeCounts < Types::BaseObject
      field :evidence_type_counts, CountsAndTotals, null: false
      field :clinical_significance_counts, [CountsAndTotalWithKey], null: false
      field :support_counts, [SeriesWithKey], null: false
    end


    def self.included(klass)
      klass.field :top_genes_by_variants, CountsAndTotals, null: false
      klass.field :evidence_type_counts, EvidenceTypeCounts, null: false
      klass.field :evidence_level_counts, [NameWithCount], null: false
      klass.field :evidence_rating_counts, [NameWithCount], null: false
      klass.field :evidence_status_counts, [NameWithCount], null: false
      klass.field :top_diseases_by_evidence, CountsAndTotals, null: false
      klass.field :amp_category_counts, CountsAndTotals, null: false

      def top_diseases_by_evidence
        top_diseases = EvidenceItem.joins(:molecular_profile, :disease)
           .where("evidence_items.status != 'rejected'")
           .where("molecular_profiles.deprecated = false")
           .group(:disease_id)
           .select("evidence_items.disease_id, count(distinct(evidence_items.id)) as evidence_count")
           .order('evidence_count desc')
           .first(9)

         covered_count = 0
         counts = top_diseases.map do |d|
           covered_count += d.evidence_count
           {
             name: d.disease.name,
             link: d.disease.link,
             count: d.evidence_count
           }
         end
         total_diseases = EvidenceItem.joins(:molecular_profile).where("evidence_items.status != 'rejected'").where("molecular_profiles.deprecated = false").where.not(disease_id: nil).distinct.count
         counts << {
           name: 'Other',
           count: total_diseases - covered_count,
           link: Rails.application.routes.url_helpers.url_for("/diseases"),
         }

         {
           counts: counts,
           total: Disease.joins(evidence_items: [:molecular_profile])
           .where("evidence_items.status != 'rejected'").where("molecular_profiles.deprecated = FALSE").distinct.count,
           secondary_total: total_diseases
         }
      end

      def amp_category_counts
        amp_category_counts = Assertion.joins(:molecular_profile)
          .where(molecular_profiles: { deprecated: false })
          .where("assertions.status != 'rejected'")
          .where.not(amp_level: nil)
          .group(:amp_level)
          .select("assertions.amp_level, count(distinct(assertions.id)) as assertion_count")
        amp_categories = Constants::AMP_LEVELS.map do |level|
          amp_category = amp_category_counts.find{|c| c.amp_level == level}
          {
            name: level,
            count: amp_category ? amp_category.assertion_count : 0,
          }
        end
        {
          total: Assertion.joins(:molecular_profile).where(molecular_profiles: { deprecated: false }).where("assertions.status != 'rejected'").where.not(amp_level: nil).distinct.count,
          counts: amp_categories
        }
      end

      def evidence_level_counts
        EvidenceItem.joins(:molecular_profile)
          .where(molecular_profiles: { deprecated: false })
          .where("evidence_items.status != 'rejected'")
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
          .where("evidence_items.status != 'rejected'")
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

      def evidence_status_counts
        EvidenceItem.joins(:molecular_profile)
          .where(molecular_profiles: { deprecated: false })
          .group(:status)
          .select("evidence_items.status, count(distinct(evidence_items.id)) as evidence_count")
          .map do |eid|
            {
              name: eid.status,
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
        counts = []
        ['Predictive', 'Diagnostic', 'Prognostic', 'Predisposing', 'Oncogenic', 'Functional'].each do |evidence_type|
          eid = eid_counts_by_type.find{|t| t.evidence_type == evidence_type}
          counts << {
            name: evidence_type,
            count: eid ? eid.evidence_count : 0
          }
          subset = EvidenceItem.joins(:molecular_profile)
            .where("evidence_items.status != 'rejected'")
            .where("molecular_profiles.deprecated = false")
            .where("evidence_items.evidence_type = ?", EvidenceItem.evidence_types[evidence_type])
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
          sort_orders[evidence_type].each do |clinical_significance|
            eids_for_type = subset.find{|s| s.clinical_significance == clinical_significance}
            counts_for_subset << {
              name: clinical_significance,
              count: eids_for_type ? eids_for_type.evidence_count : 0,
            }
            support_counts_for_subset << {
              key: clinical_significance,
              counts: [
                {
                  name: 'Supports',
                  count: eids_for_type ? eids_for_type.support_count : 0,
                },
                {
                  name: 'Does Not Support',
                  count: eids_for_type ? eids_for_type.does_not_support_count: 0,
                }
              ]
            }
          end
          subset_counts << {
            key: evidence_type,
            counts: {
              counts: counts_for_subset,
              total: EvidenceItem.joins(:molecular_profile)
                .where("evidence_items.status != 'rejected'")
                .where("molecular_profiles.deprecated = false")
              .where("evidence_items.evidence_type = ?", EvidenceItem.evidence_types[evidence_type]).distinct.count
            }
          }
          support_subset_counts << {
            key: evidence_type,
            series: support_counts_for_subset,
          }
        end

        {
          evidence_type_counts: {
            counts: counts,
            total: EvidenceItem.joins(:molecular_profile).where("evidence_items.status != 'rejected'").where("molecular_profiles.deprecated = false").distinct.count
          },
          clinical_significance_counts: subset_counts,
          support_counts: support_subset_counts,
        }
      end
    end

    def sort_orders()
      {
        'Predictive' => ['Sensitivity/Response', 'Reduced Sensitivity', 'Resistance', 'Adverse Response', 'N/A'],
        'Diagnostic' => ['Positive', 'Negative'],
        'Prognostic' => ['Better Outcome', 'Poor Outcome'],
        'Predisposing' => ['Predisposition', 'Protectiveness'],
        'Oncogenic' => ['Oncogenicity', 'Protectiveness'],
        'Functional' => ['Gain of Function', 'Unaltered Function', 'Loss of Function', 'Neomorphic', 'Dominant Negative', 'Unknown'],
      }
    end
  end
end

