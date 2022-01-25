module Analytics
  extend ActiveSupport::Concern
  included do
    after_action :submit_analytics
  end


  def submit_analytics
    if should_submit?(request)
      SubmitApiAnalytics.perform_later(
        path: request.path,
        referrer: request.referer,
        user_agent: request.user_agent,
        user_ip: request.remote_ip,
      )
    end
  end

  def should_submit?(req)
    Rails.env.production? && req.headers['Civic-Client-Name'] != 'civic-frontend'
  end

  module_function :should_submit?
end


