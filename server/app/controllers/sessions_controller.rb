class SessionsController < ApplicationController
  def create
    auth_hash = request.env["omniauth.auth"]
    authorization = Authorization.find_or_create_from_omniauth(auth_hash)
    redirect_path = get_redirect_path

    if signed_in?
      if authorization.user == current_user
        redirect_to redirect_path, notice: "Already linked that account!"
      else
        authorization.user = current_user
        authorization.save
        redirect_to redirect_path, notice: "Successfully linked new account"
      end
    else
      if authorization.user.present?
        sign_in(authorization.user)
      else
        user = User.create_from_omniauth(auth_hash, authorization)
        user.save
        authorization.save
        sign_in(user)
      end
      redirect_to redirect_path, notice: "Signed in!"
    end
  end

  def destroy
    sign_out
    head :no_content, status: :success
  end

  def failure
    render :failure, formats: [ :html ], status: :unauthorized
  end

  private
  def get_redirect_path
    origin = request.env["omniauth.origin"]
    return root_path unless origin.is_a?(String)
    return root_path if origin.match?(/[\\\x00-\x20\x7f]/)

    uri = URI.parse(origin)
    return root_path if uri.userinfo

    if uri.host || uri.scheme
      trusted = URI.parse(OmniAuth.config.full_host)
      return root_path unless [ uri.scheme, uri.host, uri.port ] == [ trusted.scheme, trusted.host, trusted.port ]
    end

    path = uri.path.presence || "/"
    return root_path unless path.start_with?("/") && !path.start_with?("//")

    path += "?#{uri.query}" if uri.query
    path += "##{uri.fragment}" if uri.fragment
    path
  rescue URI::InvalidURIError
    root_path
  end
end
