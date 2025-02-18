class DuplicateDoids < Report
  attr_reader :duplicate_doid_groups

  def self.name
    "Duplicate DOIDs"
  end

  def self.description
    "Generate a report of diseases with duplicate DOIDs."
  end

  def setup
    @duplicate_doid_groups = Disease
      .select('doid, COUNT(*) as disease_count')
      .where.not(doid: nil)
      .where(deprecated: false)
      .group(:doid)
      .having('COUNT(*) > 1')
      .each_with_object({}) do |disease_group, hash|
        hash[disease_group.doid] = Disease.where(doid: disease_group.doid, deprecated: false)
      end
  end

  def headers
    ['ID', 'DOID', 'Name', 'Assertion Count', 'EID Count']
  end

  def execute
    duplicate_doid_groups.each do |doid, diseases|
      diseases.each do |disease|
        num_assertions = disease.assertions.count
        num_evidence_items = disease.evidence_items.count
        data << [disease.id, disease.doid, disease.name, num_assertions, num_evidence_items]
      end
    end
  end
end
