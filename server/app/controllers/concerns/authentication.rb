module Authentication
  extend ActiveSupport::Concern

  included do
    helper_method :current_user, :signed_in?, :signed_out?
    before_action :authorize_token
  end

  def authorize_token
    if user = authenticate_with_http_token { |token| ApiKey.find_by_token(token)&.bearer }
      @current_user = user
    end
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def signed_in?
    !!current_user
  end

  def signed_out?
    !signed_in?
  end

  def sign_in(user)
    @current_user = user
    session[:user_id] = user.id
  end

  def sign_out
    @current_user = nil
    reset_session
  end
end
