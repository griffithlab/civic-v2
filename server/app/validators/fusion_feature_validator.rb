class FusionFeatureValidator < ActiveModel::Validator
  def validate(record)
    partner_status_valid_for_gene_ids(record)
    at_least_one_gene_id(record)
    regulatory_status_set_correctly(record)
  end

  private
  def partner_status_valid_for_gene_ids(record)
    if !record.in_revision_validation_context
      [ record.five_prime_gene, record.three_prime_gene ].zip([ record.five_prime_partner_status, record.three_prime_partner_status ], [ :five_prime_gene, :three_prime_gene ]).each do |gene, status, fk|
        if gene.nil? && (status == "known" || status == "regulatory")
          record.errors.add(fk, "Partner status cannot be 'known' or 'regulatory' if the gene isn't set")
        elsif !gene.nil? && (status != "known" && status != "regulatory")
          record.errors.add(fk, "Partner status has to be 'known' or 'regulatory' if gene is set")
        end
      end
    end
  end

  def at_least_one_gene_id(record)
    if !record.in_revision_validation_context && record.five_prime_gene_id.nil? && record.three_prime_gene_id.nil?
      record.errors.add(:base, "One or both of the genes need to be set")
    end
  end

  def regulatory_status_set_correctly(record)
    if record.three_prime_partner_status == "regulatory" && record.five_prime_partner_status == "regulatory"
      record.errors.add(:base, "Only one fusion partner may be marked as regulatory")
    elsif record.three_prime_partner_status == "regulatory" || record.five_prime_partner_status == "regulatory"
      if record.regulatory_fusion_type.blank?
        record.errors.add(:regulatory_fusion_type, "You must select a regulatory fusion type if one of the fusion partners is marked as regulatory")
      end
    end
  end
end
