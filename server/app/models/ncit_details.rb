class NcitDetails
  attr_reader :term

  def initialize(term)
    @term = term
  end

  def response
    Rails.cache.fetch(cache_key(term), expires_in: 24.hours) do
      if term.ncit_id.present?
        resp = make_request(term)
        parse_response(resp)
      else
        nil
      end
    end
  rescue StandardError
    nil
  end


  def parse_response(resp)
    p = JSON.parse(resp)
    if p.size > 1
      # ambiguous result somehow
      return nil
    end

    data = p.first
    if data.nil?
      # didn't find a match
      return nil
    end

    return {
      synonyms: data["synonyms"]&.select { |s| s["type"] == "FULL_SYN" } || [],
      definitions: data["definitions"] || [],
    }
  end

  def make_request(term)
    url = "https://api-evsrest.nci.nih.gov/api/v1/concept/ncit?include=summary&list=#{term.ncit_id}"
    Scrapers::Util.make_get_request(url)
  end

  def cache_key(term)
    "ncit_details#{term.id}_#{term.updated_at}"
  end
end
