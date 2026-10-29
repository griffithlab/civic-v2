# rack-mini-profiler (development group) rewrites Cache-Control to no-store on
# every response it instruments, which defeats the long-lived public cache
# headers on Active Storage proxy responses and re-downloads every avatar on
# every page view in development. Profiling image byte-streams has no value,
# so skip the Active Storage routes entirely (String entries are path
# prefixes; skipped requests pass through with headers untouched).
if defined?(Rack::MiniProfiler)
  Rack::MiniProfiler.config.skip_paths ||= []
  Rack::MiniProfiler.config.skip_paths << "/rails/active_storage"
end
