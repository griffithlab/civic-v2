require "open3"

class SubmitClinvarBatches < ApplicationJob
  def perform
    if !Dir.exist?(output_dir)
      FileUtils.mkdir_p(output_dir)
    end

    orgs_ready_for_submit = get_orgs_ready_for_submit

    orgs_ready_for_submit.each do |org|
      batch_name = generate_batch_name(org.id)
      json_filename = json_filename_for_batch(batch_name)
      if create_gks_json_for_organization(org.id, json_filename)
        generated_gks = JSON.parse(File.read(json_filename))
        batch = import_clinvar_this_batch(batch_name, json_filename, org)
        generated_gks.dig("clinical_impact_submission").each do |submission|
          if curie = submission.dig("local_key")
            assertion_id = Integer(curie.split(":")).last
            approval = Approval.find_by(status: "active", organization_id: org.id, assertion_id: assertion_id)

            if approval.blank?
              raise "No Approval Found for Org: #{org.id} and Assertion: #{assertion_id}"
            end

            ClinvarBatchEntry.create!(
              clinvar_batch: batch,
              assertion_id: assertion_id,
              approval_id: approval.id,
              approval_last_reviewed: approval.last_reviewed,
              status: "submitted",
              date_last_evaluated: submission.dig("clinical_impact_classification", "date_last_evaluated").to_datetime
            )
          end
        end
      end
    end
  end

  private
  def get_orgs_ready_for_submit
    Approval.eager_load(:organization).where(status: "active")
      .select { |a| a.ready_for_clinvar_submission? }
      .map { |a| a.organization }
      .uniq
  end

  def create_gks_json_for_organization(organization_id, json_filename)
    _, stderr, status = Open3.capture3(
        "civicpy",
        "create-gks-json",
        "--output-json",
        json_filename,
        "--organization-id",
        organization_id
    )

    if !status.success?
      raise stderr
    end

    File.exist?(json_filename)
  end

  def import_clinvar_this_batch(batch_name, gks_json_filename, organization)
    clinvar_this = ClinvarThis.new(organization.clinvar_api_key, batch_name)
    clinvar_this.auth
    clinvar_this.import_batch(gks_json_filename)
    response_json = clinvar_this.submit_batch

    submission_id = response_json.dig("id")
    if submission_id.present?
      ClinvarBatchSubmission.create!(
        organization_id: organization.id,
        status: "submitted",
        batch_name: batch_name,
        submitted_at: DateTime.now,
        submission_id: submission_id
      )
    else
      raise StandardError.new("Unable to find Submission Id for ClinVar batch #{batch_name}")
    end
  ensure
    clinvar_this.cleanup
  end

  def generate_batch_name(organization_id)
    timestamp = DateTime.now.strftime("%Y-%m-%d")
    "#{timestamp}-civic-org-#{organization_id}"
  end

  def json_filename_for_batch(batch_name)
    File.join(
      output_dir,
      "#{batch_name}-gks.json"
    )
  end

  def output_dir
    File.join(
      Rails.root,
      "tmp",
      "gks-json-files"
    )
  end
end
