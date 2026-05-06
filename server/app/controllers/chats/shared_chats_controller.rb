module Chats
  class SharedChatsController < ::ApplicationController
    layout "chats"

    def show
      @chat = Chats::Chat.publicly_shared.find_by!(public_id: params[:public_id])
      request.variant = :public
      render "chats/chats/show"
    rescue ActiveRecord::RecordNotFound
      redirect_to root_path, alert: "This shared chat is no longer available."
    end
  end
end
