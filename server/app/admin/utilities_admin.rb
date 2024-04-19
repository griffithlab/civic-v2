Trestle.admin(:utilities) do
  menu do
    item :utilities, icon: "fas fa-cogs"
  end

  controller do
    def index
      @utilities = ActionWrapper::AVAILABLE_ACTIONS
    end

    def show
      @util = ActionWrapper::AVAILABLE_ACTIONS.find { |x| params[:name] == x.name }
    end

    def perform_action
      @util = ActionWrapper::AVAILABLE_ACTIONS.find { |x| params[:name] == x.name }
      util_params = params.permit(@util.inputs.keys).to_h
      action = @util.new
      res = action.perform(util_params.symbolize_keys)

      if res.errors.any?
        flash[:error] = res.errors.join("\n")
      else
        flash[:message] = "#{@util.name} Succeeded"
      end

      render :show
    end
  end

  routes do
    get '/:name', action: :show
    post '/:name', action: :perform_action
  end
end
