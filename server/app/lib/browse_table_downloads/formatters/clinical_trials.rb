module BrowseTableDownloads
  module Formatters
    class ClinicalTrials < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "nct_id", ->(r) { r.nct_id } ],
          [ "name", ->(r) { r.name } ],
          [ "source_count", ->(r) { r.source_count } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
        ]
      end
    end
  end
end
