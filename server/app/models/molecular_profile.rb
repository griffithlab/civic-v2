class MolecularProfile < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable
  include WithTimepointCounts

  has_and_belongs_to_many :variants
  has_and_belongs_to_many :sources
  has_many :assertions
  has_many :evidence_items
  has_one :evidence_items_by_status
  has_and_belongs_to_many :molecular_profile_aliases, join_table: :molecular_profile_aliases_molecular_profiles
  has_many :source_suggestions
  has_and_belongs_to_many :deprecated_variants,
    ->() { where('variants.deprecated = TRUE') },
    class_name: 'Variant'
  has_one :deprecation_event,
    ->() { where(action: 'deprecated molecular profile').includes(:originating_user) },
    as: :subject,
    class_name: 'Event'

  validates :raw_name, presence: true

  searchkick highlight: [:full_name, :common_name, :aliases], callbacks: :async, word_start: [:name]
  scope :search_import, -> { includes(:molecular_profile_aliases, variants: [:gene])}

  def search_data
    {
      name: self.name,
      aliases: self.molecular_profile_aliases.map(&:name)
    }
  end

  def should_index?
    !deprecated
  end

  GENE_REGEX = /#GID(?<id>\d+)/i
  VARIANT_REGEX = /#VID(?<id>\d+)/i

  def mpid
    "MPID#{self.id}"
  end

  def name
    if self.common_name
      return self.common_name
    else
      return self.full_name
    end
  end

  def full_name
    segments.map { |s| s.respond_to?(:name) ? s.name : s }.join(' ')
  end

  def link
    Rails.application.routes.url_helpers.url_for("/molecular-profiles/#{self.id}")
  end

  def segments
    #TODO - we could batch these queries if it becomes an issue
    @segments ||= raw_name.split(' ').map do |segment|
      if gene_match = segment.match(GENE_REGEX)
        Gene.find(gene_match[:id])
      elsif variant_match = segment.match(VARIANT_REGEX)
        Variant.find(variant_match[:id])
      else
        segment
      end
    end
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:evidence_items)
        .group('molecular_profiles.id')
        .select('molecular_profiles.id')
        .where("evidence_items.status != 'rejected'")
        .where("molecular_profiles.deprecated = ?", false)
        .having('MIN(evidence_items.created_at) >= ?', x)
        .distinct
        .count
    }
  end
end
