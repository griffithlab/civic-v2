class SourceLink < ActiveRecord::Base
  belongs_to :source, class_name: "Source"
  belongs_to :linked_source, class_name: "Source"
  
  validates :reason, presence: true
  
  def self.reasons
    %w[same_clinical_trial overlapping_data_or_patients related_abstract other]
  end
end