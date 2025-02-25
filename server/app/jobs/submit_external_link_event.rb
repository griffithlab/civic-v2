require "uri"
require "net/http"

class SubmitExternalLinkEvent < SubmitAnalyticsEvent
  def create_body(opts)
    {
      client_id: SecureRandom.uuid,
      user_id: opts[:user_ip],
      timestamp_micros: DateTime.now.strftime("%s%6N"),
      events: [
        {
          name: "inbound_link_clicked",
          params: {
            ip: opts[:user_ip],
            referrer: opts[:referrer] || "",
            user_agent: opts[:user_agent] || "",
            path: opts[:path]
          }
        }
      ]
    }.to_json
  end
end
