class EvidenceItem < ActiveRecord::Base
  include Subscribable
  include Commentable
  include Flaggable
  include Moderated

  belongs_to :variant
  belongs_to :disease
  belongs_to :source
  has_and_belongs_to_many :drugs
  has_and_belongs_to_many :phenotypes

  enum evidence_type: Constants::EVIDENCE_TYPES
  enum evidence_level: Constants::EVIDENCE_LEVELS
  enum evidence_direction: Constants::EVIDENCE_DIRECTIONS, _suffix: true
  #TODO make this an enum:
  #enum evidence_status: Constants::EVIDENCE_STATUS
  enum variant_origin: Constants::VARIANT_ORIGINS, _suffix: true
  enum clinical_significance: Constants::CLINICAL_SIGNIFICANCES
  enum drug_interaction_type: Constants::DRUG_INTERACTION_TYPES

  def gene
    self.variant.gene
  end
end
