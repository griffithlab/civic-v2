require "net/http"
require "uri"
require "nokogiri"

module Scrapers
  class Asco
    def self.run
      ActiveRecord::Base.transaction do
        ::Source.all.each do |source|
          populate_source_fields(source)
        end
      end
    end

    def self.get_citation_from_doi(doi:)
      resp = fetch_asco_page(doi: doi)
      resp.citation
    end

    def self.fetch_asco_page(doi:)
      resp = Util.make_get_request("https://api.crossref.org/works/#{doi}")
      response = CrossrefWorkResponse.new(resp)
      if response.json["message"]["publisher"] != "American Society of Clinical Oncology (ASCO)"
        raise StandardError.new("Publisher not 'American Society of Clinical Oncology (ASCO)': #{response.json['message']['publisher']}")
      end
      response
    end

    def self.populate_source_fields(source)
      resp = fetch_asco_page(doi: source.citation_id)

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

      source.asco_presenter = resp.asco_presenter
      source.asco_abstract_id = resp.asco_abstract_id
      source.publication_day = resp.day
      source.publication_month = resp.month
      source.publication_year = resp.year
      if !resp.abstract.blank?
        source.abstract = Nokogiri::HTML(resp.abstract).text.strip.sub(/\A#{resp.asco_abstract_id}/, '').strip
      end
      source.journal = resp.journal
      source.title = resp.article_title
      source.full_journal_title = resp.full_journal_title
      source.citation = resp.citation

      source.save!
    end
  end
end
