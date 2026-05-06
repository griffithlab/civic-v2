class RefreshSingleView < ApplicationJob
  def perform(klass)
    if klass < MaterializedViews::MaterializedView
      klass.refresh if !Rails.env.development?
    end
  end
end
