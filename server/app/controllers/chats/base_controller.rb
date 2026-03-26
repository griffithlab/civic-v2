module Chats
  class BaseController < ::ApplicationController
    layout "chats"

    before_action :require_login

    private

    def require_login
      unless signed_in?
        redirect_to "/sign_in", alert: "You must be signed in to access chats."
      end
    end
  end
end
