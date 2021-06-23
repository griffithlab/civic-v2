class EvidenceBrowseTableRow < ApplicationRecord

  enum evidence_type: Constants::EVIDENCE_TYPES
  enum evidence_level: Constants::EVIDENCE_LEVELS
  enum evidence_direction: Constants::EVIDENCE_DIRECTIONS, _suffix: true
  enum variant_origin: Constants::VARIANT_ORIGINS, _suffix: true
  enum clinical_significance: Constants::CLINICAL_SIGNIFICANCES
  enum drug_interaction_type: Constants::DRUG_INTERACTION_TYPES

  self.primary_key = :id

  def self.refresh
    Scenic.database.refresh_materialized_view(table_name, concurrently: true, cascade: false)
  end

  def readonly?
    true
  end
end
