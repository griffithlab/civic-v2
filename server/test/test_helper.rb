ENV['RAILS_ENV'] ||= 'test'
require_relative "../config/environment"
require "rails/test_help"
require 'mocha/minitest'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  set_fixture_class feature_genes: Features::Gene
  set_fixture_class feature_factors: Features::Factor

  # Add more helper methods to be used by all tests here...
end
