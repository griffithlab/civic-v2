module BrowseTableDownloads
  PAGINATION_KEYS = %w[first last before after].freeze
  IGNORED_KEYS = (PAGINATION_KEYS + %w[sort_by sortBy]).freeze
  MULTI_VALUE_SEPARATOR = ","

  TableExport = Struct.new(:resolver, :formatter, keyword_init: true)

  def self.downloadable?(table_name)
    TableExports.all.key?(table_name.to_s)
  end
end
