require "find"

module Chats
  class IngestManuscripts
    def self.call(manuscripts_path = "app/assets/publications/")
      files_to_process = Find.find(manuscripts_path)
        .select { |f| f.ends_with?(".pdf") }
      puts("Found #{files_to_process.size} pages to ingest.")

      files_to_process.each do |file_path|
        pubmed_id = File.basename(file_path, ".pdf")
        if Chats::Document.find_by(content_hash: pubmed_id, document_source: :publication)
          puts("Skipping existing publication: #{pubmed_id}")
        else
          puts("Processing pubmed id: #{pubmed_id}")
          manuscript_result = process_pdf(file_path)
          Chats::Document.create!(
            content: manuscript_result[:text],
            title: manuscript_result[:title],
            embedding: manuscript_result[:embedding],
            location: "#{Chats::Constants::PUBLICATION_URL_PREFIX}#{pubmed_id}",
            document_source: :publication,
            content_hash: pubmed_id,
          )
        end
      end
    end

    def self.process_pdf(file_path)
      reader = PDF::Reader.new(file_path)

      title = if reader.info[:Title].present?
        reader.info[:Title]
      else
        chat = RubyLLM.chat.with_schema(Chats::ManuscriptSchema)
        resp = chat.ask(Chats::Constants::PDF_INSTRUCTIONS, with: file_path)
        resp.content["title"]
      end

      full_text = []

      embeddings = reader.pages.map do |page|
        text = page.text.squish
        full_text << text
        response = RubyLLM.embed(text)
        response.vectors
      end

      # create an average embedding for the whole document
      avg = embeddings.transpose.map do |dimension_values|
        dimension_values.sum / dimension_values.size.to_f
      end

      {
        title: title,
        embedding: avg,
        text: full_text.join(""),
      }
    end
  end
end
