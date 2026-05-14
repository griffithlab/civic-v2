module BrowseTableDownloads
  module Formatters
    class Organizations < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.name } ],
          [ "description", ->(r) { r.description&.squish } ],
          [ "url", ->(r) { r.url } ],
          [ "member_count", ->(r) { r.member_count } ],
          [ "activity_count", ->(r) { r.activity_count } ],
          [ "child_organizations", ->(r) { names(child_organization_names(r.child_organizations)) } ],
          [ "most_recent_activity_timestamp", ->(r) { r.most_recent_activity_timestamp } ],
        ]
      end

      def self.child_organization_names(child_organizations)
        Array(child_organizations).map { |child| child["child_name"] || child[:child_name] }
      end
    end
  end
end
