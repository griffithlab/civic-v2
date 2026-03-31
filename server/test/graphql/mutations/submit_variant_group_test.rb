require "test_helper"

class SubmitVariantGroupTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @v600e = variants(:v600e)
    @v600k = variants(:v600k)
    @source = sources(:pubmed_source)
    @submit_vg_mutation = <<-GRAPHQL
      mutation(
        $name: String!,
        $description: String,
        $variantIds: [Int!]!,
        $sourceIds: [Int!]!,
        $organizationId: Int
      ) {
        submitVariantGroup(input: {
          name: $name,
          description: $description,
          variantIds: $variantIds,
          sourceIds: $sourceIds,
          organizationId: $organizationId
        }) {
          variantGroup {
            id
            name
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @submit_vg_mutation,
      variables: {
        name: "New Variant Group",
        description: "A description of the new variant group.",
        variantIds: [ @v600e.id ],
        sourceIds: [ @source.id ],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new variant group" do
    response = execute_mutation(
      @submit_vg_mutation,
      user: @user,
      variables: {
        name: "New Variant Group",
        description: "A description of the new variant group.",
        variantIds: [ @v600e.id, @v600k.id ],
        sourceIds: [ @source.id ],
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "submitVariantGroup", "variantGroup")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal "New Variant Group", result["name"]
  end

  test "rejects non-existent variant ids" do
    response = execute_mutation(
      @submit_vg_mutation,
      user: @user,
      variables: {
        name: "Bad Variant Group",
        description: "A description of the bad variant group.",
        variantIds: [ 999999 ],
        sourceIds: [ @source.id ],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /variant ids/i)
  end

  test "rejects duplicate variant group name" do
    existing_vg = variant_groups(:test_variant_group)
    response = execute_mutation(
      @submit_vg_mutation,
      user: @user,
      variables: {
        name: existing_vg.name,
        description: "Duplicate name test description.",
        variantIds: [ @v600e.id ],
        sourceIds: [ @source.id ],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /already exists/)
  end

  test "rejects name shorter than 5 characters" do
    response = execute_mutation(
      @submit_vg_mutation,
      user: @user,
      variables: {
        name: "Sh",
        description: "A description for the short name group.",
        variantIds: [ @v600e.id ],
        sourceIds: [ @source.id ],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /name|5|minimum/i)
  end
end
