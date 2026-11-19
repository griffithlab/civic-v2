require "test_helper"

class ApiHelpersTest < ActiveSupport::TestCase
  class Client
    include ApiHelpers
  end

  FakeResponse = Struct.new(:code, :msg, :body)

  # Answer Net::HTTP.start with a canned response instead of making a request.
  def get_with_status(code, body = "{}")
    response = FakeResponse.new(code.to_s, "status #{code}", body)
    original = Net::HTTP.method(:start)
    Net::HTTP.define_singleton_method(:start) { |*_args, **_kwargs, &_block| response }
    Client.new.make_get_request("https://example.org/record")
  ensure
    Net::HTTP.define_singleton_method(:start, original)
  end

  test "returns the body for any 2xx response" do
    assert_equal '{"ok":true}', get_with_status(200, '{"ok":true}')
    assert_equal '{"ok":true}', get_with_status(201, '{"ok":true}')
  end

  test "raises BadRequest for 4xx" do
    assert_raises(BadRequest) { get_with_status(404) }
  end

  test "raises RemoteServerError for 5xx" do
    assert_raises(RemoteServerError) { get_with_status(503) }
  end

  test "raises ApiFailure instead of returning nil for other codes" do
    error = assert_raises(ApiFailure) { get_with_status(301) }
    assert_match(/status code 301/, error.message)
  end
end
