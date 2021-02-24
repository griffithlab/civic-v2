class ApplicationController < ActionController::Base
  include Authentication
  include AngularCsrfToken
end
