class Actions::SuggestRevision
  include Actions::Transactional
  include Actions::WithOriginatingOrganization

  attr_reader :subject,
    :field_name, :current_value,
    :suggested_value, :originating_user,
    :organization_id, :revision,
    :comment, :revisionset_id

  def initialize(subject:, field_name:, current_value:, suggested_value:, originating_user:, organization_id:, comment:, revisionset_id:)
    @subject = subject
    @field_name = field_name
    @current_value = current_value
    @suggested_value = suggested_value
    @originating_user = originating_user
    @organization_id = organization_id
    @comment = comment
    @revision_created = false
    @revisionset_id = revisionset_id
  end

  def execute
    possible_existing_revisions = Revision.where(
      subject: subject,
      field_name: field_name,
      status: 'new'
    )

    existing_revisions = possible_existing_revisions.select do |rev|
      if suggested_value.is_a?(Array)
        rev.suggested_value.sort == suggested_value.sort
      else
        rev.suggested_value == suggested_value
      end
    end

    if existing_revisions.any?
      @revision = existing_revisions[0]
    else
      create_revision
      create_event
      if !comment.nil?
        create_comment
      end
      @revision_created = true
    end
  end

  def create_revision
      @revision = Revision.create!(
        current_value: current_value,
        suggested_value: suggested_value,
        subject: subject,
        field_name: field_name,
        status: 'new',
        revisionset_id: revisionset_id
      )
  end

  def create_event
      Event.create!(
        action: 'revision suggested',
        originating_user: originating_user,
        subject: subject,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: revision
      )
  end

  def create_comment
    cmd = Actions::AddComment.new(
      title: "",
      body: comment,
      commenter: originating_user,
      commentable: revision,
      organization_id: organization_id
    )
    cmd.perform
    if !cmd.succeeded?
      raise StandardError.new(cmd.errors.join(', '))
    end
  end

  def revision_created?
    @revision_created
  end
end
