module Loaders
  class MolecularProfileSegmentsLoader < GraphQL::Batch::Loader
    def initialize(model)
      @model = model
    end

    def perform(ids)
      mps = {}
      resolved_features = {}
      resolved_variants = {}

      MolecularProfile.where(id: ids).each do |mp|
        mps[mp.id] = mp.name.split(' ').map do |segment|
          if variant_match = segment.match(MolecularProfile::VARIANT_REGEX)
            variant_id = variant_match[:id].to_i
            resolved_variants[variant_id] = nil
            ->(features, vars) { [ features[vars[variant_id].feature_id], vars[variant_id] ] }
          else
            ->(features, vars) { segment }
          end
        end
      end

      Variant.where(id: resolved_variants.keys)
        .each { |v| resolved_variants[v.id] = v }

      Feature.where(id: resolved_variants.map{|id, v| v.feature_id})
        .each { |f| resolved_features[f.id] = f }

      ids.each do |id|
        if mp = mps[id]
          segments = mp.flat_map { |s| s.call(resolved_features, resolved_variants) }
          fulfill(id, segments)
        else
          fulfill(id, nil)
        end
      end
    end
  end
end
