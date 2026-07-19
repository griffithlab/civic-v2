module Chats
  class McpChatResponseJob < ChatJob
    def perform(chat_id)
      chat = Chats::Chat.find(chat_id)
      RubyLLM::MCP.establish_connection do |clients|
        chat.with_instructions(Constants::MCP_INSTRUCTIONS)
          .with_tools(*clients[:civic].tools)
          .complete { |_chunk| }
      end
    end
  end
end
