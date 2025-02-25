class ManeSelectTranscript
  attr_reader :variant

  def initialize(variant)
    @variant = variant
  end

  def mane_select_transcript
    Rails.cache.fetch(cache_key(variant), expires_in: 24.hours) do
      if variant.allele_registry_id
        transcripts = get_allele_registry_transcripts(variant)
        select = transcripts&.find { |t| t.key?("MANE") && t["MANE"]["maneStatus"] == "MANE Select" }
        if select
          select.dig("MANE", "nucleotide", "Ensembl", "hgvs")
        end
      end
    end
  end

  def get_allele_registry_transcripts(variant)
    allele_response = make_allele_request(variant.allele_registry_id)
    JSON.parse(allele_response)["transcriptAlleles"]
  end

  private
  def make_allele_request(allele_registry_id)
    Scrapers::Util.make_get_request(allele_url(allele_registry_id))
  rescue StandardError
    "{}"
  end

  def allele_url(allele_registry_id)
    "http://reg.genome.network/allele/#{allele_registry_id}"
  end

  def cache_key(variant)
    "mane_preferred_transcript_#{variant.id}_#{variant.hash}"
  end
end
