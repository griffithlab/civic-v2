require_relative "deploy/sidekiq"
require_relative "deploy/puma"

# config valid for current version and patch releases of Capistrano
lock "~> 3.19.0"

set :application, "civic"
set :repo_url, "https://github.com/griffithlab/civic-v2.git"

set :deploy_to, "/var/www/civic/"

set :rbenv_type, :user

set :linked_dirs, fetch(:linked_dirs, []).push("log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "public/uploads", "public/downloads", "storage")

set :repo_tree, "server"

set :migration_role, :web
set :assets_roles, [:web]
