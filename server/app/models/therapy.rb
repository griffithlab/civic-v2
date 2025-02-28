class Therapy < ApplicationRecord
  validates_with DeprecationValidator

  include WithTimepointCounts
  include WithCapitalizedName

  has_and_belongs_to_many :evidence_items
  has_and_belongs_to_many :assertions
  has_and_belongs_to_many :therapy_aliases

  validates :ncit_id, uniqueness: true, allow_nil: true

  searchkick highlight: [ :name, :aliases ], callbacks: :async, word_start: [ :name, :aliases ]
  scope :search_import, -> { includes(:therapy_aliases) }

  def search_data
    {
      name: name,
      ncit_id: ncit_id,
      aliases: therapy_aliases.map(&:name),
    }
  end

  def should_index?
    evidence_items.any?
  end

  def self.url_for(ncit_id:)
    if ncit_id.nil?
      nil
    else
      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&ns=ncit&code=#{ncit_id}"
    end
  end

  def link
    Rails.application.routes.url_helpers.url_for("/therapies/#{self.id}")
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:evidence_items)
        .group("therapies.id")
        .select("therapies.id")
        .where("evidence_items.status != 'rejected'")
        .having("MIN(evidence_items.created_at) >= ?", x)
        .distinct
        .count
    }
  end
end
