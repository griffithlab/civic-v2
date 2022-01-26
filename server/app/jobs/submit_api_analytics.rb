class SubmitApiAnalytics < ApplicationJob
  def perform(opts = {})
    tracker = Staccato.tracker(Constants::GA_TRACKING_ID, nil, ssl: true)
    tracker.pageview(opts)
end
