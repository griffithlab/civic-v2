module Scrapers
  class ClinicalTrialResponse
    attr_reader :json
    def initialize(response_body)
      @json = JSON.parse(response_body)
    end

    def nct_id
      json.dig("protocolSection", "identificationModule", "nctId")
    end

    def name
      json.dig("protocolSection", "identificationModule", "briefTitle")
    end

    def description
      if desc = json.dig("protocolSection", "descriptionModule", "briefSummary")
        desc.squish
      else
        nil
      end
    end
  end
end
