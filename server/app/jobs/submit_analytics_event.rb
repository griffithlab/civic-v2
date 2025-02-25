require "uri"
require "net/http"

class SubmitAnalyticsEvent < ApplicationJob
  GA_MEASUREMENT_ID = "G-Y6DR1YK7V9"
  GA_API_SECRET = Rails.application.credentials.dig(:ga_api_secret)

  ANALYTICS_URL = "https://www.google-analytics.com/mp/collect?api_secret=#{GA_API_SECRET}&measurement_id=#{GA_MEASUREMENT_ID}"
  HEADER = { 'Content-Type': "application/json" }

  def perform(opts = {})
    Net::HTTP.post(URI(ANALYTICS_URL), create_body(opts))
  end

  private
  def create_body(opts)
    raise NotImplementedError.new("Implement in subclass")
  end
end
