require "find"

module Chats
  class IngestReadTheDocs
    def self.call(docs_path = "/Users/acoffman/git/civic-docs/docs/_build/html/")
      files_to_process = Find.find(docs_path).select { |f| f.ends_with?(".html") }
      puts("Found #{files_to_process.size} pages to ingest.")

      files_to_process.each do |file_path|
        html_content = File.read(file_path)
        text_content = ActionController::Base.helpers
          .strip_tags(html_content)
          .squish
        title = File.basename(file_path, ".html")
        text_digest = Digest::MD5.hexdigest(text_content)
        location = file_path.gsub(docs_path, "")

        if existing_document = Chats::Document.find_by(location: location, document_source: :read_the_docs)
          if existing_document.content_hash == text_digest
            puts("Skipping existing unchanged document: #{title}")
            # no content changes, dont update embedding
          else
            puts("Updating changed document: #{title}")
            response = RubyLLM.embed(text_content)
            existing_document.embedding = response.vectors
            existing_document.content = text_content
            existing_document.content_hash = text_digest
            existing_document.save!
          end
        else
          puts("Creating new document: #{title}")
          response = RubyLLM.embed(text_content)
          Chats::Document.create!(
            content: text_content,
            title: title,
            embedding: response.vectors,
            location: location,
            document_source: :read_the_docs,
            content_hash: text_digest,
          )
        end
      end
    end
  end
end
