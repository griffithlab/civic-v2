class Assertion < ActiveRecord::Base
  include Commentable
  include Subscribable
  include Flaggable
  include Moderated

  belongs_to :gene
  belongs_to :variant
  has_and_belongs_to_many :evidence_items
  has_and_belongs_to_many :drugs
  belongs_to :disease
  belongs_to :nccn_guideline
  has_and_belongs_to_many :acmg_codes
  has_and_belongs_to_many :phenotypes

  enum amp_level: Constants::AMP_LEVELS
  enum evidence_type: Constants::ASSERTION_TYPES
  enum evidence_direction: Constants::EVIDENCE_DIRECTIONS, _suffix: true
  enum clinical_significance: Constants::CLINICAL_SIGNIFICANCES
  enum drug_interaction_type: Constants::DRUG_INTERACTION_TYPES
  enum variant_origin: Constants::VARIANT_ORIGINS, _suffix: true

  #associate_by_attribute :nccn_guideline, :name
  def name
    "AID#{self.id}"
  end
end
