class ClinicalTrial < ActiveRecord::Base
  has_and_belongs_to_many :sources

  def self.url_for(nct_id:)
    if nct_id.blank?
      nil
    else
      "https://clinicaltrials.gov/ct2/show/#{nct_id}"
    end
  end

  def link
    Rails.application.routes.url_helpers.url_for("/clinical-trials/#{self.id}")
  end
end
