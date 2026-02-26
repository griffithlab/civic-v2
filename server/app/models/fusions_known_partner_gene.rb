class FusionsKnownPartnerGene < ApplicationRecord
  belongs_to :gene, class_name: "Features::Gene"
  belongs_to :fusion, class_name: "Features::Fusion"

  def know_partner_specific_fusion
    if self.fusion.five_prime_partner_status == 'known'
      Features::Fusion.joins(:feature).find_by(five_prime_gene_id: self.fusion.five_prime_gene_id, three_prime_gene_id: self.gene_id, feature: { deprecated: false })
    elsif self.fusion.three_prime_partner_status == 'known'
      Features::Fusion.joins(:feature).find_by(five_prime_gene_id: self.gene_id, three_prime_gene_id: self.fusion.three_prime_gene_id, feature: { deprecated: false })
    end
  end
end
