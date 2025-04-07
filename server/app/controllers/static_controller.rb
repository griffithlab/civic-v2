class StaticController < ApplicationController
  def status
    render json: {
      status: :ok,
      env: Rails.env,
      displayEnvBanner: DISPLAY_ENVIRONMENT_BANNER,
    }
  end
end
