module Chats
  class ChatResponseSchema < RubyLLM::Schema
    string :answer_text, description: "The answer to the user's query"

    array :sources_cited, description: "A list of documents cited by the answer, including the document title and a link to its location" do
      object do
        string :title
        string :link
      end
    end
  end
end
