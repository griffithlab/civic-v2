module Chats
  class MessagesController < BaseController
    before_action :set_chat

    def create
      return unless content.present?

      Chats::ChatResponseJob.perform_later(@chat.id, content)

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
  end
end
