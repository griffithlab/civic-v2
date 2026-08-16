require "test_helper"

# Guards the RecordLoader batching on the by-id entity resolvers.
#
# These resolvers used `Model.find_by(id: id)`, which issues one SELECT per id.
# Form population asks for many entities at once — a cold assertion revise form
# fires 20+ by-id lookups, and the client now sends them as a single batched
# GraphQL request — so each resolver goes through `Loaders::RecordLoader`, which
# coalesces every id requested during one execution into one `WHERE id IN (...)`.
#
# The failure mode this guards is invisible in the response: swapping a loader
# back to `find_by` returns exactly the same data, just N queries instead of 1.
# That is why these tests count SQL rather than assert on results alone. Adding a
# resolver to `query_type.rb` without a loader is the regression to catch here.
class RecordLoaderBatchingTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
  end

  # GraphQL field name => [table, two persisted records]
  #
  # Fixtures are used wherever two already exist. The rest are created inline
  # rather than added to the shared fixture files: batching only needs two rows
  # of any kind, and fixture rows are global — adding them can perturb unrelated
  # tests that assert on counts. These are rolled back with the test transaction.
  def cases
    @cases ||= {
      "disease" => [ "diseases", [
        diseases(:lung_cancer),
        Disease.create!(name: "test disease b", display_name: "Test Disease B", doid: "9990001"),
      ] ],
      "therapy" => [ "therapies", [
        therapies(:erlotinib),
        Therapy.create!(name: "Test Therapy B", ncit_id: "C9990001"),
      ] ],
      "source" => [ "sources", [
        sources(:pubmed_source),
        Source.create!(citation_id: "87654321", source_type: 0, title: "Another test publication"),
      ] ],
      "phenotype" => [ "phenotypes", [
        Phenotype.create!(hpo_id: "HP:9990001", hpo_class: "Test Phenotype A"),
        Phenotype.create!(hpo_id: "HP:9990002", hpo_class: "Test Phenotype B"),
      ] ],
      "variantType" => [ "variant_types", [
        VariantType.create!(name: "test_variant_type_a", display_name: "Test Variant Type A",
                            description: "first", soid: "SO:9990001"),
        VariantType.create!(name: "test_variant_type_b", display_name: "Test Variant Type B",
                            description: "second", soid: "SO:9990002"),
      ] ],
      "cytogeneticRegion" => [ "cytogenetic_regions", [
        cytogenetic_regions(:chr7_whole),
        CytogeneticRegion.create!(name: "7q22", chromosome: "7", band: "q22"),
      ] ],
      "feature" => [ "features", [ features(:braf), features(:vhl) ] ],
      "variant" => [ "variants", [ variants(:v600e), variants(:v600k) ] ],
      "molecularProfile" => [ "molecular_profiles", [ molecular_profiles(:mp1), molecular_profiles(:mp2) ] ],
      "evidenceItem" => [ "evidence_items", [ evidence_items(:submitted_ei), evidence_items(:accepted_ei) ] ],
    }
  end

  test "by-id resolvers coalesce repeated lookups into a single query" do
    cases.each do |field, (table, records)|
      query = <<~GRAPHQL
        query($id1: Int!, $id2: Int!) {
          a: #{field}(id: $id1) { id }
          b: #{field}(id: $id2) { id }
        }
      GRAPHQL

      lookups = capture_id_lookups(table) do
        response = Civic2Schema.execute(
          query,
          variables: { "id1" => records[0].id, "id2" => records[1].id },
          context: { current_user: @user }
        )

        assert_nil response["errors"], "#{field}: #{response["errors"].inspect}"
        assert_equal records[0].id, response.dig("data", "a", "id"), field
        assert_equal records[1].id, response.dig("data", "b", "id"), field
      end

      assert_equal 1, lookups.length,
        "#{field}: expected one id lookup on #{table}, got #{lookups.length}: #{lookups.inspect}"
      assert_match(/IN\s*\(/, lookups.first,
        "#{field}: expected the batched lookup to use an IN clause, got #{lookups.first}")
    end
  end

  test "by-id resolvers return nil for a nonexistent id" do
    cases.each_key do |field|
      query = <<~GRAPHQL
        query($id: Int!) {
          #{field}(id: $id) { id }
        }
      GRAPHQL

      response = Civic2Schema.execute(
        query,
        variables: { "id" => -1 },
        context: { current_user: @user }
      )

      # RecordLoader must miss softly the way find_by did. `.find` would raise
      # here, which is why acmg_code/clingen_code/nccn_guideline were left alone.
      assert_nil response["errors"], "#{field}: #{response["errors"].inspect}"
      assert_nil response.dig("data", field), field
    end
  end

  private

  # Collects SELECTs that filter the given table by id, ignoring association and
  # count queries that happen to touch the same table. Matches the id predicate
  # anywhere in the WHERE so STI type conditions don't hide it.
  def capture_id_lookups(table)
    seen = []
    matcher = /SELECT .+ FROM "#{table}" WHERE .*"#{table}"\."id"/i
    callback = lambda do |_name, _start, _finish, _id, payload|
      sql = payload[:sql]
      seen << sql if sql&.match?(matcher)
    end
    ActiveSupport::Notifications.subscribed(callback, "sql.active_record") { yield }
    seen
  end
end
