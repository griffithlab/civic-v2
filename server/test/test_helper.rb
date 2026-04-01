ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  set_fixture_class feature_genes: Features::Gene
  set_fixture_class feature_factors: Features::Factor
  set_fixture_class feature_fusions: Features::Fusion
  set_fixture_class feature_regions: Features::Region


  def execute_mutation(query, variables: {}, user: nil, **kwargs)
    context = kwargs.delete(:context) || {}
    if user
      context = context.merge(current_user: user)
    end

    execute_args = { variables: variables }.merge(kwargs)
    if context.present?
      execute_args[:context] = context
    end

    Civic2Schema.execute(query, **execute_args)
  end

  def assert_graphql_success(response)
    assert_nil response["errors"], "Expected successful GraphQL response but got: #{response.to_h}"
  end

  def assert_graphql_error(response, pattern)
    errors = response["errors"]
    refute_nil errors, "Expected GraphQL errors but got: #{response.to_h}"
    messages = errors.map { |error| error["message"].to_s }
    matched = messages.any? { |message| message.match?(pattern) }
    assert matched, "Expected one error matching #{pattern.inspect}, got: #{messages.inspect}"
  end
end
