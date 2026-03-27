module Chats
  class Document < ApplicationRecord
    self.table_name = "chats_documents"

    has_neighbors :embedding
    enum :document_source, [ :read_the_docs, :publication ]
  end
end
