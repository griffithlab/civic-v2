module Loaders
  class MolecularProfileSegmentsLoader < GraphQL::Batch::Loader
    GENE_REGEX = /#GID(?<id>\d+)/i
    VARIANT_REGEX = /#VID(?<id>\d+)/i

    def initialize(model)
      @model = model
    end

    def perform(ids)
      mps = {}
      resolved_genes = {}
      resolved_variants = {}

      MolecularProfile.where(id: ids).each do |mp|
        mps[mp.id] = mp.raw_name.split(' ').map do |segment|
          if gene_match = segment.match(GENE_REGEX)
            gene_id = gene_match[:id].to_i
            resolved_genes[gene_id] = nil
            ->(genes, vars) { genes[gene_id] }
          elsif variant_match = segment.match(VARIANT_REGEX)
            variant_id = variant_match[:id].to_i
            resolved_variants[variant_id] = nil
            ->(genes, vars) { vars[variant_id] }
          else
            ->(genes, vars) { segment }
          end
        end
      end

      Variant.where(id: resolved_variants.keys)
        .each { |v| resolved_variants[v.id] = v }

      Gene.where(id: resolved_genes.keys)
        .each { |g| resolved_genes[g.id] = g }

      ids.each do |id|
        if mp = mps[id]
          segments = mp.map { |s| s.call(resolved_genes, resolved_variants) }
          fulfill(id, segments)
        else
          fulfill(id, nil)
        end
      end
    end
  end
end
