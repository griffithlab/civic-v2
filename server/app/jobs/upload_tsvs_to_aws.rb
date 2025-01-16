class UploadTsvsToAws < ApplicationJob
  class MonthlyTsvsNotFound < StandardError
  end

  retry_on MonthlyTsvsNotFound, wait: 1.day

  def perform
    release_present = File.exist?(absolute_local_path(expected_files.first[1]))
    if release_present
      expected_files.each do |s3_target, local_file|
        unless bucket.object(s3_target).exists? && bucket.object(s3_target).content_length > 0
          io = File.new(absolute_local_path(local_file), 'r')
          bucket.put_object({
            key: s3_target,
            body: io
          })
          io.close
        end
      end
    else
      raise MonthlyTsvsNotFound
    end
  end

  private
  def absolute_local_path(file)
    File.join(TsvRelease.downloads_path, file)
  end

  def bucket_name
    'civic-aws-opendata'
  end

  def date_string
    Date.today.beginning_of_month.strftime('%d-%b-%Y')
  end

  def client
    if @client
      return @client
    end

    Aws.config.update(
      region: AWSCreds.region,
      credentials: Aws::Credentials.new(AWSCreds.aws_access_key, AWSCreds.aws_secret_key)
    )

    client = Aws::S3::Client.new(
      region: AWSCreds.region,
      credentials: Aws::Credentials.new(AWSCreds.aws_access_key, AWSCreds.aws_secret_key)
    )

    @client = Aws::S3::Resource.new(client: client)
  end

  def bucket
    @bucket ||= client.bucket(bucket_name)
  end

  def expected_files
    {
      "AssertionSummaries/date=#{date_string}/AssertionSummaries.tsv" => "#{date_string}/#{date_string}-AssertionSummaries.tsv",
      "ClinicalEvidenceSummaries/date=#{date_string}/ClinicalEvidenceSummaries.tsv" => "#{date_string}/#{date_string}-ClinicalEvidenceSummaries.tsv",
      "FeatureSummaries/date=#{date_string}/FeatureSummaries.tsv" => "#{date_string}/#{date_string}-FeatureSummaries.tsv",
      "VariantGroupSummaries/date=#{date_string}/VariantGroupSummaries.tsv"=> "#{date_string}/#{date_string}-VariantGroupSummaries.tsv",
      "VariantSummaries/date=#{date_string}/VariantSummaries.tsv" => "#{date_string}/#{date_string}-VariantSummaries.tsv",
      "MolecularProfileSummaries/date=#{date_string}/MolecularProfileSummaries.tsv" => "#{date_string}/#{date_string}-MolecularProfileSummaries.tsv",
      #"VCF/date=#{date_string}/civic_accepted.vcf" => "#{date_string}/#{date_string}-civic_accepted.vcf",
      #"VCF/date=#{date_string}/civic_accepted_and_submitted.vcf" => "#{date_string}/#{date_string}-civic_accepted_and_submitted.vcf"
    }
  end
end
