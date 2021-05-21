class FetchSourceData < ApplicationJob
  def perform(source)
    case source.source_type
    when 'PubMed'
      #TODO - port over authors, clinical trials, etc, so this works
      #Scrapers::PubMed.populate_source_fields(source)
    when 'ASCO'
      #Scrapers::Asco.populate_source_fields(source)
    else
      raise StandardError.new("Unknown source type #{source.source_type}. Non-exhaustive match.")
    end
  end
end
