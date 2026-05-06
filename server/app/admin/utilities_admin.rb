Trestle.admin(:utilities) do
  menu do
    group :tools do
      item :utilities, icon: "fas fa-cogs"
    end
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
      util_params = params.permit(@util.inputs.keys).to_h.symbolize_keys
      # checkbox will come in as 0 or 1
      # cast it to a boolean here so utilities dont have to worry about that
      util_params.each do |key, val|
        if @util.inputs[key] == :boolean
          util_params[key] =  ActiveRecord::Type::Boolean.new.cast(val)
        end
      end
      action = @util.new
      res = action.perform(util_params)

      if res.errors.any?
        flash[:error] = res.errors.join("\n")
      else
        flash[:message] = "#{@util.name} Succeeded"
      end

      render :show
    end
  end

  routes do
    get "/:name", action: :show
    post "/:name", action: :perform_action
  end
end
