module Moderated
  extend ActiveSupport::Concern

  included do
    has_many :revisions,
             as: :subject

    has_many :open_revisions,
             -> { where(status: "new") },
             as: :subject,
             class_name: "Revision"

    has_one :last_accepted_revision,
            ->() { where(status: "accepted").includes(:user).order("revisions.updated_at DESC") },
            as: :subject,
            class_name: "Revision"

    has_one :last_accepted_revision_event,
            ->() { where(action: "revision accepted").includes(:originating_user).order("events.updated_at DESC") },
            as: :subject,
            class_name: "Event"

    has_many :events, as: :subject
    has_one :last_submitted_revision_event,
      ->() { where(action: "revision suggested").includes(:originating_user).order("events.updated_at DESC") },
      as: :subject,
      class_name: "Event"

    attr_accessor :in_revision_validation_context, :revision_target_id
  end

  # TODO: Refactor to use new Revision format
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
      has_pending_evidence: (pending_evidence.length > 0 or self.evidence_items_by_status.submitted_count > 0),
    }
  end

  def on_revision_accepted
  end

  # TODO: handle special cases with things happening after change accepted:
  # e.g. update variant score, accepted changes to rejected eids should update
  # status, accepted changes to eid should update assertion status
end
