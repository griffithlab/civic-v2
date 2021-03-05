class Actions::SuggestChange
  include Actions::Transactional
  include Actions::WithOriginatingOrganization

  attr_reader :subject,
    :field_name, :current_value,
    :suggested_value, :originating_user,
    :organization_id, :suggested_change,
    :comment, :changeset_id

  def initialize(subject:, field_name:, current_value:, suggested_value:, originating_user:, organization_id:, comment:, changeset_id:)
    @subject = subject
    @field_name = field_name
    @current_value = current_value
    @suggested_value = suggested_value
    @originating_user = originating_user
    @organization_id = organization_id
    @comment = comment
    @change_created = false
    @changeset_id = changeset_id
  end

  def execute
    possible_existing_changes = V2SuggestedChange.where(
      subject: subject,
      field_name: field_name,
      status: 'new'
    )

    existing_changes = possible_existing_changes.select do |change|
      if suggested_value.is_a?(Array)
        change.suggested_value.sort == suggested_value.sort
      else
        change.suggested_value == suggested_value
      end
    end

    if existing_changes.any?
      @suggested_change = existing_changes[0]
    else
      create_suggested_change
      create_event
      create_comment
      @change_created = true
    end
  end

  def create_suggested_change
      @suggested_change = V2SuggestedChange.create!(
        current_value: current_value,
        suggested_value: suggested_value,
        subject: subject,
        field_name: field_name,
        status: 'new',
        changeset_id: changeset_id
      )
  end

  def create_event
      Event.create!(
        action: 'change suggested',
        originating_user: originating_user,
        subject: subject,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: suggested_change
      )
  end

  def create_comment
    cmd = Actions::AddComment.new(
      title: "",
      body: comment,
      commenter: originating_user,
      commentable: suggested_change,
      organization_id: organization_id
    )
    cmd.perform
  end

  def change_created?
    @change_created
  end
end
