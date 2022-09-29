module Actions
  class ModerateEvidenceItem
    include Actions::Transactional
    include Actions::WithOriginatingOrganization

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
      update_variant_score
    end

    def update_status
      evidence_item.lock!
      if evidence_item.status == new_status
        raise StandardError.new("Attempted to update EID#{evidence_item.id} to #{new_status} but it already was.")
      end

      evidence_item.status = new_status
      if new_status == 'rejected'
        evidence_item.save(validate: false)
      else
        evidence_item.save!
      end
      evidence_item.subscribe_user(originating_user)
    end

    def create_event
      action = if new_status == 'submitted'
                 'reverted'
               else
                 new_status
               end


      Event.create!(
        action: action,
        originating_user: originating_user,
        subject: evidence_item,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: evidence_item
      )
    end

    def update_variant_score
      UpdateVariantScore.perform_later(evidence_item.variant)
    end
  end
end
