class Actions::AcceptRevision
  include Actions::Transactional
  include Actions::WithOriginatingOrganization

  attr_reader :revision, :accepting_user, :organization_id, :subject, :superseded_revisions, :comment

  def initialize(revision:, accepting_user:, organization_id: nil, comment: nil)
    @revision = revision
    @accepting_user = accepting_user
    @organization_id = organization_id
    @subject = revision.subject
    @comment = comment
  end

  def execute
    revision.lock!
    subject.lock!
    subject.send("#{revision.field_name}=", revision.suggested_value)
    subject.save!
    revision.status = 'accepted'
    revision.save!
    supersede_conflicting_revisions
    create_event
    unless comment.nil?
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: accepting_user,
        commentable: revision,
        organization_id: organization_id
      )
      cmd.perform
    end
  end

  def supersede_conflicting_revisions
    @superseded_revisions = Revision.where(field_name: revision.field_name, status: 'new')
    superseded_revisions.each do |sc|
      sc.status = 'superseded'
      sc.save!
      Event.create!(
        action: 'revision superseded',
        originating_user: accepting_user,
        subject: subject,
        originating_object: sc,
        organization: resolve_organization(accepting_user, organization_id)
      )
    end
  end

  def create_event
    Event.create!(
      action: 'revision accepted',
      originating_user: accepting_user,
      subject: subject,
      originating_object: revision,
      organization: resolve_organization(accepting_user, organization_id)
    )
  end
end
