class MolecularProfile < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable

  has_and_belongs_to_many :variants
  has_and_belongs_to_many :sources
  has_many :assertions
  has_many :evidence_items
  has_and_belongs_to_many :molecular_profile_aliases, join_table: :molecular_profile_aliases_molecular_profiles

  validates :name, presence: true

  searchkick highlight: [:name, :aliases], callbacks: :async, word_start: [:name]
  scope :search_import, -> { includes(:molecular_profile_aliases, variants: [:gene])}

  def search_data
    {
      name: self.display_name,
      aliases: self.molecular_profile_aliases.map(&:name)
    }
  end

  GENE_REGEX = /#GID(?<id>\d+)/i
  VARIANT_REGEX = /#VID(?<id>\d+)/i

  def mpid
    "MPID#{self.id}"
  end

  def display_name
    segments.map { |s| s.respond_to?(:name) ? s.name : s }.join(' ')
  end

  def link
    Rails.application.routes.url_helpers.url_for("/molecular-profiles/#{self.id}")
  end

  def segments
    #TODO - we could batch these queries if it becomes an issue
    @segments ||= name.split(' ').map do |segment|
      if gene_match = segment.match(GENE_REGEX)
        Gene.find(gene_match[:id])
      elsif variant_match = segment.match(VARIANT_REGEX)
        Variant.find(variant_match[:id])
      else
        segment
      end
    end
  end
end
