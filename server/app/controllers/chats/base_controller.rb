module Chats
  class BaseController < ::ApplicationController
    layout "chats"

    before_action :require_login
    before_action :ensure_bedrock_credentials

    private

    def require_login
      unless signed_in?
        chat_redirect = request.path == "/mcp-chat" ? "/mcp-chat" : "/curation-chat"
        query = { sign_in: true, redirect: chat_redirect, message: "Please Sign In To Chat" }.to_query
        redirect_to "/welcome?#{query}", alert: "You must be signed in to access chats."
      end
    end

    def ensure_bedrock_credentials
      BedrockCredentials.ensure_fresh!
    end
  end
end
