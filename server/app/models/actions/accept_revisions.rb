class Actions::AcceptRevisions
  include Actions::Transactional
  include Actions::WithOriginatingOrganization

  attr_reader :revisions, :accepting_user, :organization_id, :subject, :superseded_revisions, :comment

  def initialize(revisions:, accepting_user:, organization_id: nil, comment: nil)
    @revisions = revisions
    @accepting_user = accepting_user
    @organization_id = organization_id
    @subject = revisions.first.subject
    @comment = comment
  end

  def execute
    revisions.each{|r| r.lock!}
    subject.lock!

    revisions.each do |revision|
      subject.send("#{revision.field_name}=", revision.suggested_value)
    end
    subject.save!

    revisions.each do |revision|
      revision.status = 'accepted'
      revision.save!
      supersede_conflicting_revisions(revision)
      create_event(revision)
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
  end

  def supersede_conflicting_revisions(revision)
    @superseded_revisions = Revision.where(
      subject: revision.subject,
      field_name: revision.field_name,
      status: 'new'
    )
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

  def create_event(revision)
    Event.create!(
      action: 'revision accepted',
      originating_user: accepting_user,
      subject: subject,
      originating_object: revision,
      organization: resolve_organization(accepting_user, organization_id)
    )
  end
end
