class Mutations::CreateFusionFeature < Mutations::MutationWithOrg
  description 'Create a new Fusion Feature in the database.'

  argument :five_prime_gene, Types::Fusion::FusionPartnerInputType, required: true,
    description: 'The 5" fusion partner'

  argument :three_prime_gene, Types::Fusion::FusionPartnerInputType, required: true,
    description: 'The 3" fusion partner'

  field :feature, Types::Entities::FeatureType, null: false,
    description: 'The newly created Feature.'

  field :new, Boolean, null: false,
    description: 'True if the feature was newly created. False if the returned feature was already in the database.'

  def ready?(organization_id: nil, five_prime_gene:, three_prime_gene:,**kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    #check that not both gene_ids are blank
    if five_prime_gene.gene_id.blank? && three_prime_gene.gene_id.blank?
      raise GraphQL::ExecutionError, "One or both fusion partners need to have a gene_id set."
    end

    #check that the gene IDs are not the same
    if five_prime_gene.gene_id == three_prime_gene.gene_id
      raise GraphQL::ExecutionError, "Fusion partner gene IDs cannot be identical"
    end

    #check that the gene(s) exist if specified
    [five_prime_gene.gene_id, three_prime_gene.gene_id].compact.each do |gene_id|
      if Features::Gene.find(gene_id).nil?
        raise GraphQL::ExecutionError, "Gene with CIViC ID #{gene_id} does not exist"
      end
    end

    #check that partner status matches gene_id presence
    [five_prime_gene, three_prime_gene].each do |gene_input|
      if gene_input.gene_id.present? && (gene_input.partner_status != 'known' && gene_input.partner_status != 'regulatory')
        raise GraphQL::ExecutionError, "Partner status needs to be 'known' or 'regulatory' if a gene_id is set"
      end
      if gene_input.gene_id.blank? && (gene_input.partner_status == 'known' || gene_input.partner_status == 'regulatory')
        raise GraphQL::ExecutionError, "Partner status can't be 'known' or 'regulatory' if a gene_id is not set"
      end
    end

    #check that maximum one gene has regulatory_fusion_type set
    if five_prime_gene.partner_status == 'regulatory' && three_prime_gene.partner_status == 'regulatory'
      raise GraphQL::ExecutionError, "Only one Fusion partner can be marked 'regulatory'"
    end
    if five_prime_gene.regulatory_fusion_type.present? && three_prime_gene.regulatory_fusion_type.present?
      raise GraphQL::ExecutionError, "Only one Fusion partner can have a regulatory fusion type set."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(five_prime_gene:, three_prime_gene:, organization_id: nil)

    #only one can be set
    regulatory_fusion_type = five_prime_gene.regulatory_fusion_type || three_prime_gene.regulatory_fusion_type

    existing_feature_instance = Features::Fusion
      .find_by(
        five_prime_gene_id: five_prime_gene.gene_id,
        three_prime_gene_id: three_prime_gene.gene_id,
        five_prime_partner_status: five_prime_gene.partner_status,
        three_prime_partner_status: three_prime_gene.partner_status,
        regulatory_fusion_type: regulatory_fusion_type
      )

    if existing_feature_instance.present?
      return {
        feature: existing_feature_instance.feature,
        new: false,
      }

    else
      cmd = Activities::CreateFusionFeature.new(
        five_prime_gene_id: five_prime_gene.gene_id,
        three_prime_gene_id: three_prime_gene.gene_id,
        five_prime_partner_status: five_prime_gene.partner_status,
        three_prime_partner_status: three_prime_gene.partner_status,
        regulatory_fusion_type: regulatory_fusion_type,
        originating_user: context[:current_user],
        organization_id: organization_id,
      )

      res = cmd.perform

      if res.succeeded?
        return {
          feature: res.feature,
          new: true,
        }
      else
        raise GraphQL::ExecutionError, res.errors.join(', ')
      end
    end
  end
end
