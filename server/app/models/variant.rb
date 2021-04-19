class Variant < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable

  belongs_to :gene
  belongs_to :secondary_gene, class_name: 'Gene'
  has_many :evidence_items
  has_many :assertions
  has_and_belongs_to_many :variant_aliases
  has_and_belongs_to_many :variant_types
  has_and_belongs_to_many :clinvar_entries
  has_and_belongs_to_many :hgvs_expressions
  has_and_belongs_to_many :sources

  enum reference_build: [:GRCh38, :GRCh37, :NCBI36]
end
