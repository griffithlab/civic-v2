module Chats
  class ManuscriptSchema < RubyLLM::Schema
    string :title, description: "The title of the publication."
  end
end
