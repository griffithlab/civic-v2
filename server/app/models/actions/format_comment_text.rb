require 'rinku'
require 'sanitize'

module Actions
  class FormatCommentText
    def self.get_segments(text:)
      if text.blank?
        return []
      end

      linked = Rinku.auto_link(text, :all, 'target="_blank"')
      sanitized = Sanitize.fragment(linked, Sanitize::Config::BASIC)
       .gsub("\n", "<br/>")

      mention_segments = Actions::ExtractMentions.new(sanitized)
        .perform
        .segments
      reference_segments = Actions::ExtractReferences.new(mention_segments)
        .perform
        .segments

      return reference_segments.chunk { |segment| segment.is_a?(String) }.map do |(is_strings, segments)|
        if is_strings
          segments.map(&:strip).map { |s| s + ' ' }.join
        else
          segments
        end
      end.flatten
    end
  end
end
