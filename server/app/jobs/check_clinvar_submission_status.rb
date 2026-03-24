class CheckClinvarSubmissionStatus < ApplicationJob
  def perform
    batches_to_check.each do |batch|
      clinvar_client = create_clinvar_client_for_batch(batch)
      status_response = clinvar_client.get_batch_status
      process_batch(batch, status_response)
    end
  end

  private
  def batches_to_check
    ClinvarBatchSubmission.eager_load(:organization)
      .where(status: [ "submitted", "processing" ])
  end

  def create_clinvar_client_for_batch(batch)
    ClinvarThis.new(batch.organization.clinvar_api_key, batch.batch_name)
  end

  def process_batch(batch, status_response)
    status = status_response.dig("actions")&.first&.dig("status")

    case status
    when "submitted"
      # no op
    when "error"
      process_results(batch, status_response, "error")
      # handle errors
      # error: One or more records in the batch failed.
      # One or more file URLs will be available in actions[0].responses[].files
      # In actions[0].responses[0].message there will be more information for severity, errorCode, and text.
      # severity will also be error and the errorCode will be 1 or 2.
      # An errorCode of 1 indicates partial success which means that some records in the batch failed while others succeeded. An errorCode of 2 indicates that all records in the batch failed.
      # Any failed records can be submitted with corrections as a new submission which is assigned a new submission ID. Submission IDs are never resubmitted with updates.
    when "processing"
      mark_batch_processing(batch)
    when "processed"
      process_results(batch, status_response, "processed")
    else
      raise StandardError.new("Unexpected batch status #{status} for ClinVar batch submission #{batch.id}")
    end
  end

  def process_results(batch, status_response, batch_status)
    result_file = status_response
      .dig("actions")&.first&.dig("responses")&.first&.dig("files")&.first

    if result_file.blank?
      raise StandardError.new("Cannot file result file for Batch #{batch.id}. #{status_response}")
    end

    results = retrieve_clinvar_json(result_file)

    results["submissions"].each do |submission|
      assertion_curie = submission.dig("identifiers", "localKey")
      assertion_id = Integer(assertion_curie.split(":").last)

      # find the batch entry corresponding to the submission
      batch_entry = ClinvarBatchEntry.find_by(
        status: [ "submitted", "processing" ],
        clinvar_batch: batch,
        assertion_id: assertion_id
      )

      if submission["processingStatus"] == "Success"
        clinvar_accession = submission.dig("identifiers", "clinvarAccession")

        if clinvar_accession.blank?
          raise StandardError.new("Expected to find ClinVar Accession")
        end

        approval = batch_entry.approval
        approval.clinvar_accession = clinvar_accession
        approval.save!
        batch_entry.status = "success"
        batch_entry.save!
      elsif submission["processingStatus"] == "Error"
        batch_entry.errors = submission.dig("errors")
        batch_entry.status = "error"
        batch_entry.save!
      else
        raise StandardError.new("Unknown processing status found in batch #{batch.id}. #{submission}")
      end
    end

    batch.status = batch_status
    batch.save!
  end

  def mark_batch_processing(batch)
    batch.clinvar_batch_entries.each do |entry|
      entry.status = "processing"
      entry.save!
    end
    batch.status = "processing"
    batch.save!
  end

  def retrieve_clinvar_json(url)
    JSON.parse(Scrapers::Util.make_get_request(url))
  end
end
