class CaptureMentionsAndNotify < ApplicationJob
  def perform(comment, event)
    cmd = Actions::CaptureMentionsAndNotify.new(comment, event)
    cmd.perform
    if cmd.errors.any?
      raise StandardError.new(cmd.errors.join("\n"))
    end
  end
end
