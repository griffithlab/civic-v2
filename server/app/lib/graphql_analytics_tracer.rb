RequestTracer = Struct.new(:path, :referrer, :user_agent, :user_ip, keyword_init: true) do
  def trace(key, data)
    if key == "analyze_query"
      query = data[:query]
      title = query.selected_operation.selections&.first&.name

      SubmitApiAnalytics.perform_later(
        path: request.path,
        referrer: request.referer,
        user_agent: request.user_agent,
        user_ip: request.remote_ip,
        title: title
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
      RequestTracer.new(
        path: request.path,
        referrer: request.referer,
        user_agent: request.user_agent,
        user_ip: request.remote_ip,
      )
    else
      NullTracer
    end
  end
end
