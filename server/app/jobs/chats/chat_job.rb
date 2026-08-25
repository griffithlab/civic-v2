module Chats
  class ChatJob < ::ApplicationJob
    before_perform :ensure_bedrock_credentials

    def ensure_bedrock_credentials
      BedrockCredentials.ensure_fresh!
    end
  end
end
