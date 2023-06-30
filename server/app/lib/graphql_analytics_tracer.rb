RequestTracer = Struct.new(:user_ip, keyword_init: true) do
  def trace(key, data)
    if key == "analyze_query"
      query = data[:query]
      query_type = query.selected_operation.selections&.first&.name

      SubmitApiAnalytics.perform_later(
        user_ip: user_ip,
        query_type: query_type
      )
    end
    yield
  end
end

class NullTracer
  def self.trace(key, data)
    yield
  end
end

class GraphqlAnalyticsTracer
  def self.for_request(req)
    if Analytics.should_submit?(req)
      RequestTracer.new(user_ip: req.remote_ip)
    else
      NullTracer
    end
  end
end
