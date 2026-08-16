require "test_helper"

# Guards that `evidenceItems(therapyInteractionType:)` actually filters.
#
# The client's evidence manager has offered a Therapy Interaction filter menu
# since it was written, but `evidenceItems` had no such argument — so the
# control set a variable the schema never declared and silently filtered
# nothing. That was invisible from the client: a filter that changes no rows
# looks the same as a filter whose value matches everything.
#
# The client side is guarded by evidence-manager.config.spec.ts, which asserts
# every filterable column reaches a declared query variable. This is the other
# half: that the variable, once declared, reaches the database.
class EvidenceItemsFilterTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @combination = evidence_items(:accepted_ei)
    @sequential = evidence_items(:submitted_ei)
    @unset = evidence_items(:submitted_ei_by_editor)

    # An interaction type is only valid on an item with two or more therapies
    # (evidence_item_validator.rb:43). That rule is irrelevant to whether the
    # filter works, so set the column directly rather than building two-therapy
    # fixtures whose extra associations could perturb other tests. Rolled back
    # with the test transaction.
    @combination.update_column(:therapy_interaction_type, "Combination")
    @sequential.update_column(:therapy_interaction_type, "Sequential")
  end

  # `interaction: :omitted` builds a query with no argument at all, which is a
  # different thing from passing null — see the last test.
  def evidence_item_ids(interaction)
    query =
      if interaction == :omitted
        <<~GRAPHQL
          query {
            evidenceItems { nodes { id } }
          }
        GRAPHQL
      else
        <<~GRAPHQL
          query($interaction: TherapyInteraction) {
            evidenceItems(therapyInteractionType: $interaction) {
              nodes { id }
            }
          }
        GRAPHQL
      end

    response = Civic2Schema.execute(
      query,
      variables: interaction == :omitted ? {} : { "interaction" => interaction },
      context: { current_user: @user }
    )

    assert_nil response["errors"], response["errors"].inspect
    response.dig("data", "evidenceItems", "nodes").map { |node| node["id"] }
  end

  test "filtering by an interaction type excludes the other types" do
    ids = evidence_item_ids("COMBINATION")

    assert_includes ids, @combination.id
    refute_includes ids, @sequential.id
    refute_includes ids, @unset.id
  end

  test "each interaction type selects its own rows" do
    ids = evidence_item_ids("SEQUENTIAL")

    assert_includes ids, @sequential.id
    refute_includes ids, @combination.id
  end

  # The regression that matters: before the resolver grew this argument, the
  # filtered and unfiltered result sets were identical.
  test "omitting the filter returns rows of every interaction type" do
    ids = evidence_item_ids(:omitted)

    assert_includes ids, @combination.id
    assert_includes ids, @sequential.id
    assert_includes ids, @unset.id
  end

  # Passing the argument as null is not the same as leaving it out: search_object
  # still runs the option block, so `where(therapy_interaction_type: nil)` selects
  # the rows that have none. This is the shape every other option here has, and it
  # is why the client converts a cleared filter to `undefined` rather than `null`
  # (evidence-manager.component.ts getQueryFilterParams) — an omitted key is what
  # "no filter" has to look like on the wire.
  test "an explicit null selects the rows with no interaction type" do
    ids = evidence_item_ids(nil)

    assert_includes ids, @unset.id
    refute_includes ids, @combination.id
    refute_includes ids, @sequential.id
  end
end
