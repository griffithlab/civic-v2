Rails.application.routes.draw do
  root to: "static#index"

  get "/sign_in" =>"static#index"

  scope "api", defaults: { format: :json } do
    get "/status", to: "static#status"
    post "/graphql", to: "graphql#execute"
    get "/auth/:provider/callback" => "sessions#create"
    get "/sign_out" => "sessions#destroy", as: :signout
    post "/upload_profile_image" => "profile_images#upload"

    if Rails.env.development?
      post "/auth/:provider/callback" => "sessions#create"
    end
  end

  get "/links" => "links#redirect"
  get "links/:idtype/:id" => "links#redirect"
  get "/genes/:id" => "links#redirect_legacy_gene_id"

  get "/api/graphiql" => "graphiql#show"

  get "/curation-chat", to: "chats/chats#new", defaults: { chat_type: "curation" }, as: :curation_chat
  get "/mcp-chat", to: "chats/chats#new", defaults: { chat_type: "mcp" }, as: :mcp_chat

  namespace :chats, path: "chats" do
    root to: "chats#index"
    resources :chats, path: "" do
      resources :messages, only: [ :create ]
    end
    resources :models, only: [ :index, :show ] do
      collection do
        post :refresh
      end
    end
  end

  require "sidekiq/web"
  require "sidekiq/cron/web"
  mount Sidekiq::Web, at: "/jobs", constraints: UserLoggedInConstraint.new
  mount SolidErrors::Engine, at: "/errors", constraints: UserLoggedInConstraint.new
end
