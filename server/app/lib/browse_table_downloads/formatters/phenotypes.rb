module BrowseTableDownloads
  module Formatters
    class Phenotypes < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.hpo_class } ],
          [ "hpo_id", ->(r) { r.hpo_id } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
        ]
      end
    end
  end
end
