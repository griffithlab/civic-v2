class DiseasesWithoutEids < Report
  attr_reader :diseases_without_associations

  def self.name
    "Diseases Without Assertions or EIDs"
  end

  def self.description
    "Generate a report of diseases that have no assertions or evidence items associated with them."
  end

  def setup
    @diseases_without_associations = Disease
      .left_joins(:assertions, :evidence_items)
      .group("diseases.id")
      .having("COUNT(assertions.id) = 0 AND COUNT(evidence_items.id) = 0")
      .where(deprecated: false)
      .distinct
  end

  def headers
    [ "ID", "DOID", "Name" ]
  end

  def execute
    diseases_without_associations.each do |disease|
      data << [ disease.id, disease.doid, disease.name ]
    end
  end
end
