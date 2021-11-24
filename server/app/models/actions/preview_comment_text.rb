module Actions
  class PreviewCommentText
    def self.get_segments(text:)
      mention_segments = Actions::ExtractMentions.new(text)
        .perform
        .segments
      reference_segments = Actions::ExtractReferences.new(mention_segments)
        .perform
        .segments

      #TODO sanitize, markdown, make links, etc

      return reference_segments
    end
  end
end
