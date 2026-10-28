module BrowseTableDownloads
  class Formatter
    class << self
      def names(values)
        names = Array(values).map { |value| name_for(value) }.compact
        names.empty? ? nil : names.join(",")
      end

      def name_for(value)
        case value
        when nil
          nil
        when Hash
          value["name"] || value[:name] ||
            value["display_name"] || value[:display_name]
        else
          if value.respond_to?(:display_name)
            value.display_name
          elsif value.respond_to?(:name)
            value.name
          else
            value.to_s
          end
        end
      end

      def ids(values)
        ids = Array(values).map { |value| value.respond_to?(:id) ? value.id : value }.compact
        ids.empty? ? nil : ids.join(",")
      end

      def headers
        columns.map(&:first)
      end

      def row(record)
        columns.map { |_header, value| instance_exec(record, &value) }
      end
    end
  end
end
