class ClientController < Rails::ApplicationController
  def index
    render file: Rails.root.join('public/client/main', 'index.html')
  end
end
