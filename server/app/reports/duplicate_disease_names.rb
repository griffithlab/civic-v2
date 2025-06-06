class DuplicateDiseaseNames < Report
  attr_reader :duplicate_name_groups

  def self.name
    "Duplicate Disease Names"
  end

  def self.description
    "Generate a report of diseases with duplicate names."
  end

  def setup
    @duplicate_name_groups = Disease
      .select("name, COUNT(*) as disease_count")
      .where.not(name: nil)
      .where(deprecated: false)
      .group(:name)
      .having("COUNT(*) > 1")
      .each_with_object({}) do |disease_group, hash|
        hash[disease_group.name] = Disease.where(name: disease_group.name, deprecated: false)
      end
  end

  def headers
    [ "ID", "DOID", "Name", "Assertion Count", "EID Count" ]
  end

  def execute
    duplicate_name_groups.each do |name, diseases|
      diseases.each do |disease|
        num_assertions = disease.assertions.count
        num_evidence_items = disease.evidence_items.count
        data << [ disease.id, disease.doid, disease.name, num_assertions, num_evidence_items ]
      end
    end
  end
end
