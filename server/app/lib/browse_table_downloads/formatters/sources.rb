module BrowseTableDownloads
  module Formatters
    class Sources < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "citation", ->(r) { r.citation } ],
          [ "name", ->(r) { r.title } ],
          [ "authors", ->(r) { names(r.authors) } ],
          [ "source_type", ->(r) { r.source_type } ],
          [ "citation_id", ->(r) { r.citation_id } ],
          [ "publication_year", ->(r) { r.publication_year } ],
          [ "journal", ->(r) { r.journal } ],
          [ "evidence_item_count", ->(r) { r.evidence_item_count } ],
          [ "source_suggestion_count", ->(r) { r.source_suggestion_count } ],
          [ "open_access", ->(r) { r.open_access } ],
          [ "deprecated", ->(r) { r.retraction_nature == "Retraction" } ],
        ]
      end
    end
  end
end
