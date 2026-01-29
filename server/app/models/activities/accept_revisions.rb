module Activities
  class AcceptRevisions < Base
    attr_reader :revisions, :accepting_user, :superseded_revisions, :approvals, :activity_subject

    def initialize(accepting_user:, revisions:, organization_id: nil, note:)
      super(organization_id: organization_id, user: accepting_user, note: note)
      @revisions = revisions
      @accepting_user = accepting_user
    end

    private
    def create_activity
      # Set the subject of this activity to the subject of the revision's creation activity
      # In the case of gene/exon coordinates, the revision's subject will be the coordinate Object
      # which we do not want. The creation activity's subject will be the Variant.
      @activity_subject = revisions.first&.creation_activity&.subject
      @activity = AcceptRevisionsActivity.create!(
        subject: activity_subject,
        user: accepting_user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::AcceptRevisions.new(
        revisions: revisions,
        accepting_user: accepting_user,
        organization_id: organization&.id,
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @superseded_revisions = cmd.superseded_revisions
    end

    def after_actions
      @approvals = if activity_subject.is_a?(EvidenceItem)
        activity_subject.assertions.flat_map { |a| a.approvals.select { |e| e.active? || e.requires_review? } }
      elsif activity_subject.is_a?(Assertion)
        activity_subject.approvals.select { |e| e.active? || e.requires_review? }
      else
        []
      end
      approvals.select { |e| e.active? }.each do |e|
        e.status = "requires_review"
        e.save!
      end
    end

    def linked_entities
      [ revisions, superseded_revisions, approvals ].flatten.compact
    end
  end
end
