module BrowseTableDownloads
  module Formatters
    class VariantGroups < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "features", ->(r) { names(r.feature_names) } ],
          [ "variants", ->(r) { names(r.variant_names) } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
        ]
      end
    end
  end
end
