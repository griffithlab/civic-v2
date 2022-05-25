module Database
  class AuthenticatedCommand
    def self.run(*args)
      system(prepare_command_with_db_credentials(command(*args)))
    end

    private
    def self.prepare_command_with_db_credentials(command, overrides = {})
      no_flag = overrides.delete(:no_database_flag)
      db_config = Rails.configuration.database_configuration[Rails.env].merge(overrides)
      host     = db_config['host']
      database = db_config['database']
      username = db_config['username']
      password = db_config['password']

      command_items = [command, "-h #{host}"]
      unless username.blank?
        command_items << "-U #{username}"
      end

      unless password.blank?
        command_items.prepend("PGPASSWORD=#{password}")
      end
      if no_flag
        command_items << "#{database}"
      else
        command_items << "-d #{database}"
      end

      command_items.join(' ')
    end

    def self.command(*args)
      raise 'Not Implemented!'
    end
  end
end

