class SourceLink < ActiveRecord::Base
  belongs_to :source, class_name: "Source"
  belongs_to :linked_source, class_name: "Source"
  
  enum :reason, {
    same_clinical_trial: 'same_clinical_trial',
    overlapping_data_or_patients: 'overlapping_data_or_patients',
    related_abstract: 'related_abstract',
    other: 'other'
  }, prefix: true

  validates :reason, presence: true
end