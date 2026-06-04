module BrowseTableDownloads
  module Formatters
    class Features < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "full_name", ->(r) { r.full_name } ],
          [ "feature_type", ->(r) { r.feature_instance_type } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "diseases", ->(r) { names(r.diseases) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "molecular_profile_count", ->(r) { r.molecular_profile_count } ],
          [ "deprecated", ->(r) { r.deprecated } ],
          [ "flagged", ->(r) { r.flagged } ],
        ]
      end
    end
  end
end
