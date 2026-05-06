require "net/http"
require "uri"

module Scrapers
  class Ash
    def self.get_citation_from_doi(doi:)
      resp = fetch_ash_page(doi: doi)
      resp.citation
    end

    def self.fetch_ash_page(doi:)
      resp = Util.make_get_request("https://doi.org/#{doi}")
      AshRecordResponse.new(resp)
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

      (day, month, year) = resp.publication_date
      source.publication_day = day
      source.publication_month = month
      source.publication_year = year
      source.abstract = resp.abstract
      source.journal = resp.journal
      source.title = resp.article_title
      source.full_journal_title = resp.full_journal_title
      source.citation = resp.citation

      source.save!
    end
  end
end
