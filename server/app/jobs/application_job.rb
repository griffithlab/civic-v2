class ApplicationJob < ActiveJob::Base
  self.enqueue_after_transaction_commit = true
  # Automatically retry jobs that encountered a deadlock
  # retry_on ActiveRecord::Deadlocked

  # Most jobs are safe to ignore if the underlying records are no longer available
  # discard_on ActiveJob::DeserializationError
  #
  if Rails.env.development?
    rescue_from(StandardError) do |exception|
      binding.pry
    end
  end
end
