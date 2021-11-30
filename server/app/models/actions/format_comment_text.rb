require 'rinku'
require 'sanitize'

module Actions
  class FormatCommentText
    def self.get_segments(text:)
      linked = Rinku.auto_link(text, :all, 'target="_blank"')
      sanitized = Sanitize.fragment(linked, Sanitize::Config::BASIC)
       .gsub("\n", "<br/>")

      mention_segments = Actions::ExtractMentions.new(sanitized)
        .perform
        .segments
      reference_segments = Actions::ExtractReferences.new(mention_segments)
        .perform
        .segments

      return reference_segments.map do |segment|
        if segment.is_a?(String)
          segment.strip + " "
        else
          segment
        end
      end
    end
  end
end
