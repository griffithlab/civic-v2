class FetchSourceData < ApplicationJob
  def perform(source)
    case source.source_type
    when "PubMed"
      Scrapers::PubMed.populate_source_fields(source)
    when "ASCO"
      Scrapers::Asco.populate_source_fields(source)
    when "ASH"
      Scrapers::Ash.populate_source_fields(source)
    else
      raise StandardError.new("Unknown source type #{source.source_type}. Non-exhaustive match.")
    end
  end
end
