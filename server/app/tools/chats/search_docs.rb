module Chats
  class SearchDocs < RubyLLM::Tool
    description "Searches the contents of the CIViC ReadTheDocs documentation"
    param :query, desc: "Search query"

    def execute(query:)
      embedding = RubyLLM.embed(query).vectors

      documents = Chats::Document.nearest_neighbors(
        :embedding,
        embedding,
        distance: "cosine",
      ).limit(4)

      documents.map do |doc|
        link = if doc.document_source == "read_the_docs"
          "#{Chats::Constants::DOCS_URL_PREFIX}#{doc.location}"
        else
          doc.location
        end

        {
          link: link,
          title: doc.title,
          contents: doc.content,
          document_type: doc.document_source,
        }
      end.to_json
    end
  end
end
