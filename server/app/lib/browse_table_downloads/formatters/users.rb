module BrowseTableDownloads
  module Formatters
    class Users < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "display_name", ->(r) { r.display_name } ],
          [ "name", ->(r) { r.name } ],
          [ "username", ->(r) { r.username } ],
          [ "role", ->(r) { r.role } ],
          [ "organizations", ->(r) { names(r.organizations) } ],
          [ "evidence_count", ->(r) { r.evidence_count } ],
          [ "revision_count", ->(r) { r.revision_count } ],
          [ "most_recent_activity_timestamp", ->(r) { r.most_recent_activity_timestamp } ],
        ]
      end
    end
  end
end
