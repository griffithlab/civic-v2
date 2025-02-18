class ClinicalTrial < ActiveRecord::Base
  has_and_belongs_to_many :sources

  after_create :populate_additional_fields_if_needed

  def self.url_for(nct_id:)
    if nct_id.blank?
      nil
    else
      "https://clinicaltrials.gov/study/#{nct_id}"
    end
  end

  def link
    Rails.application.routes.url_helpers.url_for("/clinical-trials/#{self.id}")
  end

 
  private
  def populate_additional_fields_if_needed
    if self.name.blank? || self.description.blank?
      PopulateClinicalTrialRecord.perform_later(self)
    end
  end
end
