require 'set'

module Actions
  class ExtractMentions
    include Actions::Transactional
    attr_reader :mentioned_users, :mentioned_organizations, :mentioned_roles, :input_segments, :regexp, :segments

    def initialize(input_segments)
      @input_segments = Array(input_segments)
      @mentioned_users = Set.new
      @mentioned_organizations = Set.new
      @mentioned_roles = Set.new
      @segments = []
    end

    private
    def execute
      @segments = find_matches.reject(&:blank?)
    end

    def find_matches
      input_segments.flat_map do |segment|
        if segment.is_a?(String)
          segment.split(self.class.regexp).map do |split_segment|
            if split_segment.starts_with?('@')
              minus_at = split_segment[1..-1]
              if user = User.where('username ILIKE ?', minus_at).first
                mentioned_users << user
                user
              elsif organization = Organization.where('name ILIKE ?', minus_at).first
                mentioned_organizations << organization
                {
                  id: organization.id,
                  display_name: organization.name,
                  tag_type: 'ORGANIZATION'
                }
              elsif ['editors', 'admins'].include?(minus_at)
                mentioned_roles << minus_at
                split_segment
              else
                split_segment
              end
            else
              split_segment
            end
          end
        else
          segment
        end
      end
    end

    def self.regexp
      @regexp ||= Regexp.new(/\s*(@[^@\s']+)\b/)
    end
  end
end
