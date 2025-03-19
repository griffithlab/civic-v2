module Activities
  class ModerateEvidenceItem < Base
    attr_reader :evidence_item, :new_status, :endorsements

    def initialize(originating_user:, evidence_item:, organization_id: nil, new_status:)
      super(organization_id: organization_id, user: originating_user)
      @evidence_item = evidence_item
      @new_status = new_status
    end

    private
    def create_activity
      @activity = ModerateEvidenceItemActivity.create!(
        subject: evidence_item,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::ModerateEvidenceItem.new(
        originating_user: user,
        evidence_item: evidence_item,
        organization_id: organization&.id,
        new_status: new_status
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
    end

    def after_actions
      @endorsements = if new_status == 'rejected'
        evidence_item.assertions.flat_map{|a| a.endorsements.select{ |e| e.active? || e.requires_review? }}
      else
        []
      end
      endorsements.select{ |e| e.active? }.each do |e|
        e.status = 'requires_review'
        e.save!
      end
    end

    def linked_entities
      [ endorsements ]
    end
  end
end
