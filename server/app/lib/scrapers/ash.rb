require "net/http"
require "uri"

module Scrapers
  class Ash
    def self.get_citation_from_doi(doi:)
      resp = fetch_ash_page(doi: doi)
      resp.citation
    end

    def self.fetch_ash_page(doi:)
      resp = Util.make_get_request("https://api.crossref.org/works/#{doi}")
      response = CrossrefWorkResponse.new(resp)
      if response.json["message"]["publisher"] != "American Society of Hematology"
        raise StandardError.new("Publisher not 'American Society of Hematology': #{response.json['message']['publisher']}")
      end
      response
    end

    def self.populate_source_fields(source)
      resp = fetch_ash_page(doi: source.citation_id)

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
      source.abstract = resp.abstract
      source.journal = resp.journal
      source.title = resp.article_title
      source.full_journal_title = resp.full_journal_title
      source.citation = resp.citation

      source.save!
    end
  end
end
