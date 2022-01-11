server "35.87.115.86", user: 'ubuntu', roles: %w{web db app}

set :branch, 'staging'
set :rbenv_ruby, '3.0.2'

set :rails_env, 'staging'

set :linked_files, fetch(:linked_files, []).push('config/credentials/staging.key')

if !ENV['CI']
  set :ssh_options, {
    keys: ENV['CIVIC_STAGING_KEY'],
    forward_agent: false,
    auth_methods: %w(publickey)
  }
end
