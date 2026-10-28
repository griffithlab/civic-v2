require "csv"
require "ostruct"

module BrowseTableDownloads
  class Exporter
    def initialize(table_name:, variables:)
      @table_export = TableExports.all.fetch(table_name.to_s)
      @variables = self.class.normalize_variables(variables)
    end

    def each_line
      yield CSV.generate_line(@table_export.formatter.headers, col_sep: "\t")

      each_record do |record|
        yield CSV.generate_line(@table_export.formatter.row(record), col_sep: "\t")
      end
    end

    def each_record
      scope = @table_export.resolver.new(filters: @variables).results
      each_record_by_id(scope) { |record| yield record }
    end

    def each_record_by_id(scope)
      primary_key = (scope.klass.primary_key.presence || "id").to_s
      quoted_primary_key = scope.klass.connection.quote_column_name(primary_key)
      primary_key_column = "#{scope.klass.quoted_table_name}.#{quoted_primary_key}"
      id_scope = scope
        .unscope(:select, :order)
        .distinct
        .select(primary_key_column)

      id_scope.find_in_batches(batch_size: 1000, cursor: primary_key) do |batch|
        ids = batch.map { |record| record.public_send(primary_key) }
        scope.where(primary_key => ids).each { |record| yield record }
      end
    end

    def self.normalize_variables(variables)
      variables
        .to_h
        .deep_transform_keys { |key| GraphQL::Schema::Member::BuildType.underscore(key.to_s) }
        .except(*IGNORED_KEYS)
        .reject { |_key, value| value.nil? }
        .transform_values { |value| normalize_value(value) }
    end

    def self.normalize_value(value)
      case value
      when Hash
        OpenStruct.new(
          value
            .deep_transform_keys { |key| GraphQL::Schema::Member::BuildType.underscore(key.to_s) }
            .transform_values { |nested_value| normalize_value(nested_value) }
        )
      when Array
        value.map { |nested_value| normalize_value(nested_value) }
      else
        value
      end
    end
  end
end
