server "52.24.251.21", user: "ubuntu", roles: %w[web db app]

set :branch, "staging"
set :rbenv_ruby, "4.0.3"

set :rails_env, "staging"

set :linked_files, fetch(:linked_files, []).push("config/credentials/staging.key")

if !ENV["CI"]
  set :ssh_options, {
    keys: ENV["CIVIC_STAGING_KEY"],
    forward_agent: false,
    auth_methods: %w[publickey],
  }
end

# from https://github.com/capistrano/rails?tab=readme-ov-file#uploading-your-masterkey
namespace :deploy do
  namespace :check do
    before :linked_files, :set_master_key do
      on roles(:app) do
        unless test("[ -f #{shared_path}/config/credentials/staging.key ]")
          upload! "config/credentials/staging.key", "#{shared_path}/config/credentials/staging.key"
        end
      end
    end
  end
end
