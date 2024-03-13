server "44.231.73.12", user: 'ubuntu', roles: %w{web db app}

set :branch, 'release'
set :rbenv_ruby, '3.3.0'

set :rails_env, 'production'

set :linked_files, fetch(:linked_files, []).push('config/credentials/production.key')

if !ENV['CI']
  set :ssh_options, {
    keys: ENV['CIVIC_PROD_KEY'],
    forward_agent: false,
    auth_methods: %w(publickey)
  }
end
