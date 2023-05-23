module Activities
  class Base
    include Actions::Transactional
    include Actions::WithOriginatingOrganization

    attr_reader :organization, :activity, :comment_body, :comment_title, :user, :comment

    def initialize(organization_id:, user:, comment_body: nil, comment_title: '')
      @user = user
      @organization = resolve_organization(user, organization_id)
      @comment_body = comment_body
      @comment_title = comment_title
    end

    def execute
      create_activity
      call_actions
      create_comment
      link_activity
      set_verbiage
      extra_actions
    end

    def create_activity
      raise NotImplementedError.new("Activity must implement create_activity")
    end

    def call_actions
      raise NotImplementedError.new("Activity must implement call_actions")
    end

    def commentable
      raise NotImplementedError.new("Activity must implement commentable if it provides a comment body")
    end

    def linked_entities
      raise NotImplementedError.new("Activity must implement linked_entities.")
    end

    def create_comment
      if comment_body.present?
        cmd = Actions::AddComment.new(
          title: comment_title,
          body: comment_body,
          commenter: user,
          commentable: commentable,
          organization_id: organization.id
        )
        cmd.perform
        if !cmd.succeeded?
          raise StandardError.new(cmd.errors.join(', '))
        end
        @comment = cmd.comment
        events << cmd.events
      end
    end

    def link_activity
      activity.link_entities!(linked_entities)
      activity.events = events.flatten
    end

    def set_verbiage
      activity.verbiage = activity.generate_verbiage
      activity.save!
    end

    def extra_actions
      #optional. Does nothing for most activities
    end
  end
end
