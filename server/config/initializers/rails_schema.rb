Rails::Schema.configure do |config|
  config.output_path = "public/schema.html"
  config.title = "CIViC Database Schema"
  config.theme = :auto
  config.expand_columns = false
  config.schema_format = :auto
  config.exclude_models = [
    "ActiveStorage::Blob",
    "ActiveStorage::Attachment",
    "ActionMailbox::*",
  ]
end
