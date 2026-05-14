module BrowseTableDownloads
  module Formatters
    class VariantTypes < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "name", ->(r) { r.display_name } ],
          [ "soid", ->(r) { r.soid } ],
          [ "variant_count", ->(r) { r.variant_count } ],
        ]
      end
    end
  end
end
