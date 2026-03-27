module Chats
  class MessagesController < BaseController
    before_action :set_chat

    def create
      return unless content.present?

      response_job_class.perform_later(@chat.id, content)

      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to chats_chat_path(@chat) }
      end
    end

    private

    def set_chat
      @chat = current_user.chats.find(params[:chat_id])
    end

    def content
      params[:message][:content]
    end

    def response_job_class
      case @chat.chat_type
      when "mcp"
        Chats::McpChatResponseJob
      else
        Chats::ChatResponseJob
      end
    end
  end
end
