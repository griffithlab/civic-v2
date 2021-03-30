class Source < ActiveRecord::Base
  include ModeratedField

  has_and_belongs_to_many :genes
  has_and_belongs_to_many :clinical_trials

  enum source_type: ['PubMed', 'ASCO']

  def citation
    description
  end

  def source_url
    if source_type == 'PubMed'
      "http://www.ncbi.nlm.nih.gov/pubmed/#{citation_id}"
    elsif source_type == 'ASCO'
      "https://meetinglibrary.asco.org/record/#{citation_id}/abstract"
    end
  end

  def display_name
    "#{self.citation} (#{self.display_type} ID: #{self.citation_id})"
  end

  def display_type
    "#{self.source_type}"
  end
end
