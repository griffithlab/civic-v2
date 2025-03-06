require "rinku"
require "sanitize"

module Actions
  class FormatCommentText
    def self.get_segments(text:)
      if text.blank?
        return []
      end

      # swap newlines for break tags for mention and role extraction
      input_text = text.gsub("\n", "<br/>")

      mention_segments = Actions::ExtractMentions.new(input_text)
        .perform
        .segments
      reference_segments = Actions::ExtractReferences.new(mention_segments)
        .perform
        .segments

      return reference_segments.chunk { |segment| segment.is_a?(String) }.map do |(is_strings, segments)|
        if is_strings
          process_text_segment(segments)
        else
          segments
        end
      end.flatten
    end

    def self.process_text_segment(segments)
      # swap back to newlines for markdown processing
      raw_text = segments.map(&:strip).map { |s| s + " " }.join.gsub("<br/>", "\n")
      # GitHub flavored markdown
      markdown = Kramdown::Document.new(raw_text, input: "GFM").to_html
      # Autolink inline urls
      linked = Rinku.auto_link(markdown, :all, 'target="_blank"')
      # Sanitize unsafe js/html
      sanitized = Sanitize.fragment(linked, Sanitize::Config::BASIC)
      # The markdown parser wraps everything in a <p> tag which conflicts with inline entity tags/mentions.
      # Remove it and ensure a trailing space.
      # Yuck
      sanitized
        .strip
        .delete_prefix("<p>")
        .delete_suffix("</p>")
        .concat(" ")
    end
  end
end
