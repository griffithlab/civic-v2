class Variant < ApplicationRecord
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable
  include WithTimepointCounts

  belongs_to :gene
  belongs_to :secondary_gene, class_name: 'Gene', optional: true
  has_many :evidence_items
  has_many :assertions
  has_and_belongs_to_many :molecular_profiles
  has_many :variant_group_variants
  has_many :variant_groups, through: :variant_group_variants
  has_many :source_suggestions
  has_and_belongs_to_many :variant_aliases
  has_and_belongs_to_many :variant_types
  has_and_belongs_to_many :clinvar_entries
  has_and_belongs_to_many :hgvs_expressions
  has_and_belongs_to_many :sources
  has_one :evidence_items_by_status
  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

  belongs_to :single_variant_molecular_profile, 
    class_name: "MolecularProfile",
    foreign_key: :single_variant_molecular_profile_id 

  has_one :deprecation_event,
    ->() { where(action: 'deprecated variant').includes(:originating_user) },
    as: :subject,
    class_name: 'Event'
  has_one :deprecating_user, through: :deprecation_event, source: :originating_user
  belongs_to :deprecation_comment, class_name: 'Comment', optional: true

  enum reference_build: [:GRCh38, :GRCh37, :NCBI36]
  enum deprecation_reason: ['duplicate', 'invalid_variant', 'other']

  after_save :update_allele_registry_id
  after_commit :reindex_mps

  validates :reference_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true

  validates :variant_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true

  searchkick highlight: [:name, :aliases], callbacks: :async
  scope :search_import, -> { includes(:variant_aliases, :gene) }

  def search_data
    {
      name: "#{gene.name} - #{name}",
      gene: gene.name,
      aliases: variant_aliases.map(&:name),
    }
  end

  def link
    Rails.application.routes.url_helpers.url_for("/variants/#{self.id}")
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:evidence_items)
        .group('variants.id')
        .select('variants.id')
        .where("evidence_items.status != 'rejected'")
        .having('MIN(evidence_items.created_at) >= ?', x)
        .distinct
        .count
    }
  end

  def update_allele_registry_id
    SetAlleleRegistryIdSingleVariant.perform_later(self) if Rails.env.production?
  end

  def reindex_mps
    self.molecular_profiles.each { |mp| mp.reindex(mode: :async) }
  end
end
