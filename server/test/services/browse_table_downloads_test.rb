require "test_helper"

class BrowseTableDownloadsTest < ActiveSupport::TestCase
  class NullRecord
    def method_missing(_method_name, *_args)
      nil
    end

    def respond_to_missing?(_method_name, _include_private = false)
      true
    end
  end

  test "normalizes client variables for search object filters" do
    variables = {
      "first" => 35,
      "after" => "cursor",
      "sortBy" => { "column" => "NAME", "direction" => "ASC" },
      "name" => nil,
      "sourceType" => "PUBMED",
      "organization" => {
        "ids" => [ 1, 2 ],
        "includeSubgroups" => true,
      },
    }

    normalized = BrowseTableDownloads::Exporter.normalize_variables(variables)

    assert_equal [ "organization", "source_type" ], normalized.keys.sort
    assert_equal "PUBMED", normalized["source_type"]
    assert_equal [ 1, 2 ], normalized["organization"].ids
    assert_equal true, normalized["organization"].include_subgroups
  end

  test "all registered formatters return rows matching headers" do
    BrowseTableDownloads::REGISTRY.each_value do |entry|
      record = NullRecord.new
      row = entry.formatter.row(record)

      assert_equal entry.formatter.headers.length, row.length
    end
  end
end
