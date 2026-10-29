require "test_helper"

class FormatCommentTextTest < ActiveSupport::TestCase
  # The mention regex splits on whitespace, so only a single-word org name is
  # reachable by an @-mention. The shared fixtures all have spaces.
  def setup
    @org = Organization.create!(
      name: "TestOrg",
      url: "https://example.org",
      description: "An organization for mention testing"
    )
  end

  test "an @-mention of an organization yields an ORGANIZATION segment" do
    segments = Actions::FormatCommentText.get_segments(text: "hello @TestOrg")

    tag = segments.find { |s| s.is_a?(Hash) && s[:tag_type] == "ORGANIZATION" }

    assert_not_nil tag, "expected an ORGANIZATION segment, got: #{segments.inspect}"
    assert_equal @org.id, tag[:entity_id]
    assert_equal "TestOrg", tag[:display_name]
  end

  test "ORGANIZATION is a serializable TaggableEntity" do
    assert_includes Types::Commentable::TaggableEntity.values.keys, "ORGANIZATION"
  end
end
