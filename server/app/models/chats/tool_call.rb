module Chats
  class ToolCall < ApplicationRecord
    self.table_name = "chats_tool_calls"

    acts_as_tool_call message_class: "Chats::Message"
  end
end
