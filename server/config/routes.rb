Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
    root to: 'client#index'

    get '*other', to: 'client#index'
  end
end
