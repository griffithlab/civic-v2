module BrowseTableDownloads
  module Formatters
    class SourceSuggestions < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "source_id", ->(r) { r.source_id } ],
          [ "source", ->(r) { r.source&.display_name } ],
          [ "source_type", ->(r) { r.source&.source_type } ],
          [ "citation_id", ->(r) { r.source&.citation_id } ],
          [ "molecular_profile", ->(r) { name_for(r.molecular_profile) } ],
          [ "disease", ->(r) { name_for(r.disease) } ],
          [ "submitter", ->(r) { name_for(r.user) } ],
          [ "status", ->(r) { r.status } ],
          [ "reason", ->(r) { r.reason&.squish } ],
          [ "initial_comment", ->(r) { r.initial_comment&.squish } ],
          [ "created_at", ->(r) { r.created_at } ],
        ]
      end
    end
  end
end
