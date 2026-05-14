module BrowseTableDownloads
  module Formatters
    class Variants < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "feature_id", ->(r) { r.feature_id } ],
          [ "feature_name", ->(r) { r.feature_name } ],
          [ "category", ->(r) { r.category } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "variant_types", ->(r) { names(r.variant_types) } ],
          [ "diseases", ->(r) { names(r.diseases) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "deprecated", ->(r) { r.deprecated } ],
          [ "flagged", ->(r) { r.flagged } ],
        ]
      end
    end
  end
end
