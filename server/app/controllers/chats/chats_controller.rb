module Chats
  class ChatsController < BaseController
    before_action :set_chat, only: [ :show, :update, :destroy ]

    def index
      @chats = current_user.chats.order(created_at: :desc)
    end

    def new
      @chat = Chats::Chat.new
      @chat_type = params[:chat_type] || "curation"
      @selected_model = params[:model]
    end

    def create
      return unless prompt.present?

      @chat = current_user.chats.create!(model: selected_model, chat_type: chat_type)
      @chat.messages.create!(role: :user, content: prompt)
      response_job_class.perform_later(@chat.id)
      Chats::ChatNameJob.perform_later(@chat.id, prompt)

      redirect_to chats_chat_path(@chat)
    end

    def show
      @message = @chat.messages.build
    end

    def update
      @chat.update!(chat_params)
      @chat.broadcast_name_update
      head :ok
    end

    def destroy
      @chat.destroy!
      redirect_to new_chats_chat_path, notice: "Chat deleted."
    end

    private

    def set_chat
      @chat = current_user.chats.find(params[:id])
    end

    def chat_params
      params.require(:chat).permit(:name)
    end

    def selected_model
      params[:chat][:model].presence
    end

    def prompt
      params[:chat][:prompt]
    end

    def chat_type
      type = params.dig(:chat, :chat_type)
      type.in?(Chats::Chat::CHAT_TYPES) ? type : "curation"
    end

    def response_job_class
      case chat_type
      when "mcp"
        Chats::McpChatResponseJob
      else
        Chats::ChatResponseJob
      end
    end
  end
end
