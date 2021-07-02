class Variant < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable

  belongs_to :gene
  belongs_to :secondary_gene, class_name: 'Gene', optional: true
  has_many :evidence_items
  has_many :assertions
  has_and_belongs_to_many :variant_aliases
  has_and_belongs_to_many :variant_types
  has_and_belongs_to_many :clinvar_entries
  has_and_belongs_to_many :hgvs_expressions
  has_and_belongs_to_many :sources
  has_one :evidence_items_by_status

  enum reference_build: [:GRCh38, :GRCh37, :NCBI36]

  validates :reference_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true

  validates :variant_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true
end
