module Chats
  class ChatsController < BaseController
    before_action :set_chat, only: [ :show ]

    def index
      @chats = current_user.chats.order(created_at: :desc)
    end

    def new
      @chat = Chats::Chat.new
      @selected_model = params[:model]
    end

    def create
      return unless prompt.present?

      @chat = current_user.chats.create!(model: selected_model)
      Chats::ChatResponseJob.perform_later(@chat.id, prompt)
      Chats::ChatNameJob.perform_later(@chat.id, prompt)

      redirect_to chats_chat_path(@chat), notice: "Chat was successfully created."
    end

    def show
      @message = @chat.messages.build
    end

    private

    def set_chat
      @chat = current_user.chats.find(params[:id])
    end

    def selected_model
      params[:chat][:model].presence
    end

    def prompt
      params[:chat][:prompt]
    end
  end
end
