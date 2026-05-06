module Chats
  class ModelsController < BaseController
    def index
      @models = Chats::Model.all
    end

    def show
      @model = Chats::Model.find(params[:id])
    end

    def refresh
      Chats::Model.refresh!
      redirect_to chats_models_path, notice: "Models refreshed successfully"
    end
  end
end
