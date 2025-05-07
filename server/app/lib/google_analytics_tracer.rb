module GoogleAnalyticsTracer
  def analyze_query(query:)
    query_type = query.selected_operation.selections&.first&.name

    SubmitApiAnalytics.perform_later(
      user_ip: query.context[:request_ip],
      query_type: query_type
    )
    super
  end
end
