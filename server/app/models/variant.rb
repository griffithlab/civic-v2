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

  enum reference_build: [:GRCh38, :GRCh37, :NCBI36]

  validates :reference_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true

  validates :variant_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true

  searchkick highlight: [:name, :aliases]
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
end
