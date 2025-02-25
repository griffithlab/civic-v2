server "44.231.73.12", user: "ubuntu", roles: %w[web db app]

set :branch, "release"
set :rbenv_ruby, "3.3.5"

set :rails_env, "production"

set :linked_files, fetch(:linked_files, []).push("config/credentials/production.key")

if !ENV["CI"]
  set :ssh_options, {
    keys: ENV["CIVIC_PROD_KEY"],
    forward_agent: false,
    auth_methods: %w[publickey]
  }
end

# from https://github.com/capistrano/rails?tab=readme-ov-file#uploading-your-masterkey
namespace :deploy do
  namespace :check do
    before :linked_files, :set_master_key do
      on roles(:app) do
        unless test("[ -f #{shared_path}/config/credentials/production.key ]")
          upload! "config/credentials/production.key", "#{shared_path}/config/credentials/production.key"
        end
      end
    end
  end
end
