class Disease < ApplicationRecord
  validates_with DeprecationValidator

  include WithTimepointCounts
  include WithCapitalizedName

  has_many :evidence_items
  has_many :assertions
  has_many :source_suggestions
  has_and_belongs_to_many :disease_aliases

  searchkick highlight: [ :name, :aliases ], callbacks: :async, word_start: [ :name, :aliases ]
  scope :search_import, -> { includes(:disease_aliases) }

  def search_data
    {
      name: name,
      doid: "DOID:#{doid}",
      aliases: disease_aliases.map(&:name),
    }
  end

  def should_index?
    evidence_items.any?
  end


  def disease_url
    Disease.url_for_doid(doid)
  end

  def link
    Rails.application.routes.url_helpers.url_for("/diseases/#{self.id}")
  end

  def self.url_for_doid(doid)
    if doid.nil?
      nil
    else
      "https://www.disease-ontology.org/?id=DOID:#{doid}"
    end
  end


  def self.timepoint_query
    ->(x) {
      self.joins(:evidence_items)
        .group("diseases.id")
        .select("diseases.id")
        .where("evidence_items.status != 'rejected'")
        .having("MIN(evidence_items.created_at) >= ?", x)
        .distinct
        .count
    }
  end
end
