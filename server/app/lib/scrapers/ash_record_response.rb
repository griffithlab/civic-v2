module Scrapers
  class AshRecordResponse
    attr_reader :html, :meta_tags, :date

    def initialize(response_body)
      @html = Nokogiri::HTML(response_body)
      @meta_tags = html.xpath("//html/head/meta")
      @date = meta_tags.xpath("//meta[@name='citation_publication_date']")
        .first["content"]
    end

    def citation
      [ first_author, year ].join(", ")
    end

    def first_author
      if authors.size == 0
        ""
      elsif authors.size > 1
        authors.first[:last_name] + " et al."
      else
        authors.first[:last_name] + " et al."
      end
    end

    def authors
      @authors ||= meta_tags.xpath("//meta[@name='citation_author']").map { |tag| tag["content"] }
        .each
        .with_index(1)
        .map do |author, i|
          (last_name, fore_name) = author.split(", ")
          {
            fore_name: fore_name,
            last_name: last_name,
            author_position: i,
          }
        end
    end

    def abstract
      html.xpath("//section[@class='abstract']/p").inner_text
    end

    def publication_date
      [ day, month, year ]
    end

    def day
      date.split("/")[-1]
    end

    def month
      date.split("/")[1]
    end

    def year
      date.split("/")[0]
    end

    def citation_id
      meta_tags.xpath("//meta[@name='citation_doi']")
        .first["content"]
    end

    def journal
      meta_tags.xpath("//meta[@name='citation_journal_abbrev']")
        .first["content"]
    end

    def full_journal_title
      meta_tags.xpath("//meta[@name='citation_journal_title']")
        .first["content"]
    end

    def article_title
      meta_tags.xpath("//meta[@name='citation_title']")
        .first["content"]
    end
  end
end
