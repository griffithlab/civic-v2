Rails.application.routes.draw do
  root to: 'static#index'

  get '/sign_in' =>"static#index"

  scope 'api', defaults: { format: :json } do
    post '/graphql', to: 'graphql#execute'
    get '/auth/:provider/callback' => 'sessions#create'
    get '/sign_out' => 'sessions#destroy', as: :signout

    if Rails.env.development?
      post '/auth/:provider/callback' => 'sessions#create'
    end
  end

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/graphql"
  end
end
