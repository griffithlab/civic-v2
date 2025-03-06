module Analytics
  extend ActiveSupport::Concern

  def should_submit?(req)
    Rails.env.production? && req.headers["Civic-Client-Name"] != "civic-frontend"
  end

  module_function :should_submit?
end
