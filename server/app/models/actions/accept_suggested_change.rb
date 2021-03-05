class Actions::AcceptSuggestedChange
  include Actions::Transactional
  include Actions::WithOriginatingOrganization

  attr_reader :suggested_change, :accepting_user, :organization_id, :subject, :superseded_suggested_changes, :comment

  def initialize(suggested_change:, accepting_user:, organization_id: nil, comment: nil)
    @suggested_change = suggested_change
    @accepting_user = accepting_user
    @organization_id = organization_id
    @subject = suggested_change.subject
    @comment = comment
  end

  def execute
    suggested_change.lock!
    subject.lock!
    subject.send("#{suggested_change.field_name}=", suggested_change.suggested_value)
    subject.save!
    suggested_change.status = 'applied'
    suggested_change.save!
    supersede_conflicting_suggested_changes
    create_event
    unless comment.nil?
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: accepting_user,
        commentable: suggested_change,
        organization_id: organization_id
      )
      cmd.perform
    end
  end

  def supersede_conflicting_suggested_changes
    @superseded_suggested_changes = V2SuggestedChange.where(field_name: suggested_change.field_name, status: 'new')
    superseded_suggested_changes.each do |sc|
      sc.status = 'superseded'
      sc.save!
      Event.create!(
        action: 'change superseded',
        originating_user: accepting_user,
        subject: subject,
        originating_object: sc,
        organization: resolve_organization(accepting_user, organization_id)
      )
    end
  end

  def create_event
    Event.create!(
      action: 'change accepted',
      originating_user: accepting_user,
      subject: subject,
      originating_object: suggested_change,
      organization: resolve_organization(accepting_user, organization_id)
    )
  end
end
