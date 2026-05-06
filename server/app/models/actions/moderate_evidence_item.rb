module Actions
  class ModerateEvidenceItem
    include Actions::Transactional

    attr_reader :evidence_item, :originating_user, :organization_id, :new_status

    def initialize(evidence_item:, originating_user:, organization_id:, new_status:)
      @evidence_item = evidence_item
      @originating_user = originating_user
      @organization_id = organization_id
      @new_status = new_status
    end

    private
    def execute
      update_status
      create_event
      update_mp_score
    end

    def update_status
      evidence_item.lock!
      if evidence_item.status == new_status
        raise StandardError.new("Attempted to update EID#{evidence_item.id} to #{new_status} but it already was.")
      end

      evidence_item.status = new_status
      if new_status == "rejected"
        evidence_item.save(validate: false)
      else
        evidence_item.save!
      end
      evidence_item.subscribe_user(originating_user)
    end

    def create_event
      action = if new_status == "submitted"
                 "reverted"
      else
                 new_status
      end


      events << Event.new(
        action: action,
        originating_user: originating_user,
        subject: evidence_item,
        organization_id: organization_id,
        originating_object: evidence_item
      )
    end

    def update_mp_score
      UpdateMolecularProfileScore.perform_later(evidence_item.molecular_profile)
    end
  end
end
