val = (ENV["CIVIC_DISPLAY_ENV_BANNER"] || "false").downcase
DISPLAY_ENVIRONMENT_BANNER = ActiveModel::Type::Boolean.new.cast(val)
