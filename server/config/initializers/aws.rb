require "aws-sdk-core"

class AWSCreds
  def self.aws_access_key
    ENV["CIVIC_AWS_ACCESS_KEY"] || Rails.application.credentials.aws_access_key
  end

  def self.aws_secret_key
    ENV["CIVIC_AWS_SECRET_KEY"] || Rails.application.credentials.aws_secret_key
  end

  def self.region
    "us-west-2"
  end
end
