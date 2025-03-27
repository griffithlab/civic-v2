require "sidekiq"
require "sidekiq-cron"


unless Rails.env.headless?
  Sidekiq.configure_server do |config|
    config.on(:startup) do
      schedule_file = Rails.root.join("config", "scheduled_tasks.yml")

      if File.exist?(schedule_file) && Rails.env.production?
        Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file)
      end
    end
  end
end
