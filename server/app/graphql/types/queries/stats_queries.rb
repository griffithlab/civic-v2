module Types::Queries
  module StatsQueries
    class NameWithCount < Types::BaseObject
      field :name, String, null: false
      field :count, Int, null: false
    end


    def self.included(klass)
      klass.field :top_genes_by_variants, [NameWithCount], null: false

      def top_genes_by_variants
         top_genes = Variant.includes(:gene)
           .group(:gene_id)
           .select("variants.gene_id, count(distinct(variants.id)) as variant_count")
           .order('variant_count  desc')
           .first(5)

         top_genes.map do |v|
           {
             name: v.gene.name,
             count: v.variant_count
           }
         end
      end
    end
  end
end

