class Actions::SuggestRevision
  include Actions::Transactional
  include Actions::WithOriginatingOrganization

  attr_reader :revision_subject,
    :field_name, :current_value,
    :suggested_value, :originating_user,
    :organization_id, :revision, :revision_set_id,
    :revisionset_id, :event_subject

  def initialize(revision_subject:, event_subject:, field_name:, current_value:, suggested_value:, originating_user:, organization_id:, revisionset_id:, revision_set_id:)
    @revision_subject = revision_subject
    @event_subject = event_subject
    @field_name = field_name
    @current_value = current_value
    @suggested_value = suggested_value
    @originating_user = originating_user
    @organization_id = organization_id
    @revision_created = false
    @revisionset_id = revisionset_id
    @revision_set_id = revision_set_id
  end

  def execute
    possible_existing_revisions = Revision.where(
      subject: revision_subject,
      field_name: field_name,
      status: "new"
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
      @revision_created = true
    end
  end

  def create_revision
      @revision = Revision.create!(
        current_value: current_value,
        suggested_value: suggested_value,
        subject: revision_subject,
        field_name: field_name,
        status: "new",
        revisionset_id: revisionset_id,
        revision_set_id: revision_set_id
      )
  end

  def create_event
      events << Event.new(
        action: "revision suggested",
        originating_user: originating_user,
        subject: event_subject,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: revision
      )
  end

  def revision_created?
    @revision_created
  end
end
