require "test_helper"

# Batched transport. Apollo's BatchHttpLink POSTs a top-level JSON array instead
# of an object, which Rails hands us as params[:_json]; the controller runs those
# as one multiplex. These use introspection so they assert transport behaviour
# without depending on fixture data.
class GraphqlControllerTest < ActionDispatch::IntegrationTest
  def post_graphql(body)
    post "/api/graphql", params: body.to_json,
      headers: { "CONTENT_TYPE" => "application/json" }
    JSON.parse(response.body)
  end

  def type_query(name)
    { query: "query Q { __type(name: \"#{name}\") { name } }" }
  end

  test "a single operation is unchanged" do
    result = post_graphql(type_query("Assertion"))

    assert_response :success
    assert_equal "Assertion", result.dig("data", "__type", "name")
    assert_not result.is_a?(Array), "a single operation must not return an array"
  end

  test "a batch returns one result per operation, in request order" do
    result = post_graphql([ type_query("Assertion"), type_query("Gene"), type_query("Disease") ])

    assert_response :success
    assert_kind_of Array, result
    assert_equal 3, result.size
    assert_equal %w[Assertion Gene Disease],
      result.map { |r| r.dig("data", "__type", "name") },
      "results must come back in the order they were sent, since the client pairs them up positionally"
  end

  # the whole point of multiplex over a loop: one bad operation must not take
  # its unrelated siblings down with it
  test "an invalid operation does not fail the rest of its batch" do
    result = post_graphql([
      type_query("Assertion"),
      { query: "query Bad { thisFieldDoesNotExist }" },
      type_query("Gene"),
    ])

    assert_response :success
    assert_equal 3, result.size
    assert_equal "Assertion", result[0].dig("data", "__type", "name")
    assert result[1]["errors"].present?, "the invalid operation should report its own errors"
    assert_equal "Gene", result[2].dig("data", "__type", "name")
  end

  test "a batch over the cap is rejected rather than executed" do
    oversized = Array.new(GraphqlController::MAX_BATCH_SIZE + 1) { type_query("Assertion") }
    result = post_graphql(oversized)

    assert_response :payload_too_large
    assert_match(/exceeds the maximum/, result.dig("errors", 0, "message"))
  end

  test "a batch at exactly the cap is allowed" do
    result = post_graphql(Array.new(GraphqlController::MAX_BATCH_SIZE) { type_query("Gene") })

    assert_response :success
    assert_equal GraphqlController::MAX_BATCH_SIZE, result.size
  end
end
