class Source < ActiveRecord::Base
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
end
