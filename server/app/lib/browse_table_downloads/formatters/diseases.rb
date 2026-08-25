module BrowseTableDownloads
  module Formatters
    class Diseases < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.display_name || r.name } ],
          [ "doid", ->(r) { r.doid } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "features", ->(r) { names(r.features) } ],
          [ "feature_count", ->(r) { r.feature_count } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "deprecated", ->(r) { r.deprecated } ],
        ]
      end
    end
  end
end
