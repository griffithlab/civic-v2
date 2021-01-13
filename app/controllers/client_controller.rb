class ClientController < Rails::ApplicationController
  def index
    render file: Rails.root.join('public/', 'index.html')
  end
end
