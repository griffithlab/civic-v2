class RefreshSingleView < ApplicationJob
  def perform(klass)
    if klass < MaterializedViews::MaterializedView
      klass.refresh
    end
  end
end
