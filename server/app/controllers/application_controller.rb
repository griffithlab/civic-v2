class ApplicationController < ActionController::Base
  include Authentication
  include ActiveStorage::SetCurrent
end
