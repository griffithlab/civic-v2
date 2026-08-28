module Scrapers
  class CrossrefWorkResponse
    attr_reader :json

    def initialize(response_body)
      @json = JSON(response_body)
      if json["status"] != "ok"
        raise StandardError.new("Crossref response status not 'ok': #{json['status']}")
      elsif json["message-type"] != "work"
        raise StandardError.new("Crossref message-type not 'work': #{json['message-type']}")
      end
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
      @authors ||= json["message"]["author"]
        .each
        .with_index(1)
        .map do |author, i|
          {
            fore_name: author["given"],
            last_name: author["family"],
            author_position: i,
          }
        end
    end

    def abstract
      json["message"]["abstract"]
    end

    def publication_date
      [ day, month, year ]
    end

    def day
      json["message"]["created"]["date-parts"][0][2]
    end

    def month
      json["message"]["created"]["date-parts"][0][1]
    end

    def year
      json["message"]["created"]["date-parts"][0][0]
    end

    def journal
      short = json["message"]["short-container-title"]
      if short.empty?
        full_journal_title
      else
        short[0]
      end
    end

    def full_journal_title
      json["message"]["container-title"][0]
    end

    def article_title
      json["message"]["title"][0]
    end

    def asco_abstract_id
      json["message"]["page"].split("-").first
    end

    def asco_presenter
      a = json["message"]["author"].first
      "#{a['given']} #{a['family']}"
    end

    def update_doi
      preprint = json["message"]["relation"]["is-preprint-of"]&.find { |e| e["id-type"] == "doi" }
      if preprint.nil?
        nil
      else
        preprint["id"]
      end
    end
  end
end
