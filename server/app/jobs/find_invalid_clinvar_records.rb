class FindInvalidClinvarRecords < ApplicationJob
  KNOWN_GOOD_ID = '16609'

  def perform
    #Bail early if this fails. Maybe the site is down or something.
    check_clinvar_id(KNOWN_GOOD_ID) do |succeeded|
      if !succeeded
        raise StandardError.new("ClinVar ID #{KNOWN_GOOD_ID} did not return a 200. Aborting checks.")
      end
    end

    Variant.joins(:clinvar_entries).distinct.find_each do |variant|
      variant.clinvar_entries.each do |clinvar_entry|
        clinvar_id = clinvar_entry.clinvar_id

        if clinvar_id == 'N/A' || clinvar_id == 'NONE FOUND'
          next
        end

        if has_existing_flag?(variant, clinvar_id)
          next
        end

        check_clinvar_id(clinvar_id) do |succeeded|
          if !succeeded
            flag_variant(variant, clinvar_id)
          end
        end

        sleep 0.25
      end
    end
  end

  private
  def url_for_clinvar_id(id)
    "https://www.ncbi.nlm.nih.gov/clinvar/variation/#{id}/"
  end

  def check_clinvar_id(id)
    url = URI.parse(url_for_clinvar_id(id))
    response = Net::HTTP.get_response(url)
    case response.code
    when "200"
      yield true
    else
      yield false
    end
  end

  def has_existing_flag?(variant, clinvar_id)
    verbiage = flag_verbiage(variant, clinvar_id)
    variant.flags.where(state: 'open', flagging_user_id: Constants::CIVICBOT_USER_ID)
      .any? { |f| f.open_activity.note == verbiage }
  end

  def flag_variant(variant, clinvar_id)
    verbiage = flag_verbiage(variant, clinvar_id)
    civicbot_user = User.find(Constants::CIVICBOT_USER_ID)

    Activities::FlagEntity.new(
      flagging_user: civicbot_user,
      flaggable: variant,
      organization_id: nil,
      note: verbiage
    ).perform
  end

  def flag_verbiage(variant, clinvar_id)
    "This Variant links to a ClinVar ID that is no longer valid: #{clinvar_id}"
  end
end
