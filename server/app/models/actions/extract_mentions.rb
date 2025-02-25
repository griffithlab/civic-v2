require "set"

module Actions
  class ExtractMentions
    include Actions::Transactional
    attr_reader :mentioned_users, :mentioned_organizations, :mentioned_roles, :input_segments, :user_regexp, :role_regexp, :segments

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
      with_roles = input_segments.flat_map do |segment|
        if segment.is_a?(String)
          segment.split(self.role_regexp).map do |split_segment|
            if split_segment.starts_with?("$")
              role = split_segment[1..-1]
              mentioned_roles << role.singularize
              {
                entity_id: User.roles[role.singularize],
                display_name: role,
                tag_type: "ROLE"
              }
            else
              split_segment
            end
          end
        else
          segment
        end
      end

      with_roles.flat_map do |segment|
        if segment.is_a?(String)
          segment.split(self.class.user_regexp).map do |split_segment|
            if split_segment.starts_with?("@")
              minus_at = split_segment[1..-1]
              if user = User.where("username ILIKE ?", minus_at).first
                mentioned_users << user
                user
              elsif organization = Organization.where("name ILIKE ?", minus_at).first
                mentioned_organizations << organization
                {
                  entity_id: organization.id,
                  display_name: organization.name,
                  tag_type: "ORGANIZATION"
                }
              elsif [ "editors", "admins" ].include?(minus_at)
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

    def self.user_regexp
      @user_regexp ||= Regexp.new(/\s*(@[^@\s']+)\b/)
    end

    def self.role_regexp
      @role_regexp ||= Regexp.new(/\s(\$(?:admins|editors))\b/)
    end
  end
end
