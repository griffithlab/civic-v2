module BrowseTableDownloads
  module Formatters
    class Therapies < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "ncit_id", ->(r) { r.ncit_id } ],
          [ "aliases", ->(r) { names(r.alias_names) } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
          [ "assertion_count", ->(r) { r.assertion_count } ],
          [ "deprecated", ->(r) { r.deprecated } ],
        ]
      end
    end
  end
end
