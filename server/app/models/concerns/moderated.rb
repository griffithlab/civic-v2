module Moderated
  extend ActiveSupport::Concern
  @default_ignored_attributes = %w{updated_at created_at updated_on created_on id}

  included do
    has_many :v2_suggested_changes,
             as: :subject

    has_many :open_changes,
             ->{ where(status: 'new') },
             as: :subject,
             class_name: 'V2SuggestedChange'

    has_one :last_applied_change,
            ->() { where(status: 'applied').includes(:user).order('v2_suggested_changes.updated_at DESC') },
            as: :subject,
            class_name: 'V2SuggestedChange'

    has_one :last_applied_change_event,
            ->() { where(action: 'change suggested').includes(:originating_user).order('events.updated_at DESC') },
            as: :subject,
            class_name: 'Event'

    has_one :last_updator, through: :last_applied_change, source: :user

    has_many :events, as: :subject
    has_one :last_review_event,
      ->() { where(action: 'change accepted').includes(:originating_user).order('events.updated_at DESC') },
      as: :subject,
      class_name: 'Event'
    has_one :last_reviewer, through: :last_review_event, source: :originating_user
  end

  #TODO: Refactor to use new V2SuggestedChange format
  def pending_items # variant menu
    # get pending fields for the variant itself
    pending_fields = Actions::FindFieldsWithPendingChanges.new(self)
      .perform
      .fields

    # see if any evidence items for the variant have pending revisions
    pending_evidence = Actions::FindPendingEvidence.new(self)
      .perform
      .fields

    # fields, if variant has pending revisions; evidence, if variant has new evidence items or pending evidence revisions
    return { 
      id: self.id,
      has_pending_fields: pending_fields.length > 0, 
      has_pending_evidence: (pending_evidence.length > 0 or self.evidence_items_by_status.submitted_count > 0)
    } 
  end

  #TODO: handle special cases with things happening after change accepted:
  #e.g. update variant score, accepted changes to rejected eids should update
  #status, accepted changes to eid should update assertion status
end
