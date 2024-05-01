require 'set'

class DiseasesWithIcdo < Report
  attr_reader :qualifying_disease_ids

  def self.name
    "Counts of Diseases and EIDs with and without DO and ICD-O terms"
  end

  def self.description
    "Generate counts of Evidence Items and Diseases that have associated DOIDs and ICD-O terms"
  end

  def setup
    @qualifying_disease_ids = Set.new
    candidate_diseases = Disease.joins(:evidence_items)
      .where.not(evidence_items: {status: 'rejected'})
      .where.not(doid: nil).distinct

    candidate_diseases.find_each do |disease|
      resp = MyDiseaseInfo.new(disease).response
      if resp && resp[:icdo].present?
        @qualifying_disease_ids << disease.id
      end
      sleep 0.1
    end


  end

  def headers
    [
      "Total Diseases",
      "Total Diseases Associated with a DOID and ICD-O code",
      "Total Non Rejected EIDs",
      "Total Non Rejected EIDs Associated with a DOID and ICD-O code.",
    ]
  end

  def execute
    data << [
      Disease.joins(:evidence_items).where.not(evidence_items: {status: 'rejected'}).distinct.count,
      qualifying_disease_ids.size,
      EvidenceItem.where.not(status: 'rejected').count,
      EvidenceItem.where.not(status: 'rejected').where(disease_id: qualifying_disease_ids).count,
    ]
  end
end
