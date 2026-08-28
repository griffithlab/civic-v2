require "net/http"
require "uri"
require "nokogiri"

module Scrapers
  class BioRxiv
    def self.get_citation_from_doi(doi:)
      resp = fetch_biorxiv_page(doi: doi)
      resp.citation
    end

    def self.fetch_biorxiv_page(doi:)
      resp = Util.make_get_request("https://api.crossref.org/works/#{doi}")
      response = CrossrefWorkResponse.new(resp)
      if response.json["message"]["institution"][0]["name"] != "bioRxiv"
        raise StandardError.new("Institution not 'bioRxiv': #{response.json['message']['institution'][0]["name"]}")
      end
      response
    end

    def self.populate_source_fields(source)
      resp = fetch_biorxiv_page(doi: source.citation_id)

      resp.authors.each do |author|
        author_obj = Author.where(
          last_name: author[:last_name],
          fore_name: author[:fore_name]
        ).first_or_create!
        AuthorsSource.where(
          source: source,
          author: author_obj,
          author_position: author[:author_position]
        ).first_or_create!
      end

      source.publication_day = resp.day
      source.publication_month = resp.month
      source.publication_year = resp.year
      if !resp.abstract.blank?
        source.abstract = Nokogiri::HTML(resp.abstract).text.strip.split("Disclosures").first.sub(/\AAbstract/, "").strip
      end
      source.title = resp.article_title
      source.citation = resp.citation
      source.is_preprint = true

      source.save!
    end
  end
end
