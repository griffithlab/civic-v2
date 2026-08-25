module BrowseTableDownloads
  module Formatters
    class MolecularProfiles < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "variants", ->(r) { names(r.variants) } ],
          [ "diseases", ->(r) { names(r.diseases) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "molecular_profile_score", ->(r) { r.evidence_score } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "variant_count", ->(r) { r.variant_count } ],
          [ "deprecated", ->(r) { r.deprecated } ],
        ]
      end
    end
  end
end
