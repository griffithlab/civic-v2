class Source < ActiveRecord::Base
  include ModeratedField
  include Subscribable
  include WithTimepointCounts
  include Commentable

  has_many :evidence_items
  has_and_belongs_to_many :features
  has_and_belongs_to_many :genes, class_name: 'Features::Gene'
  has_and_belongs_to_many :clinical_trials
  has_and_belongs_to_many :molecular_profiles
  has_many :authors_sources
  has_many :authors, through: :authors_sources
  has_many :variant_groups

  enum source_type: ['PubMed', 'ASCO', 'ASH']

  validate :citation_id_format_matches_source_type

  after_create -> { MaterializedViews::SourceBrowseTableRow.refresh_async }

  def name
    display_name
  end

  def source_url
    Source.url_for(source: self)
  end

  def display_name
    "#{self.display_type}: #{self.citation}"
  end

  def link
    Rails.application.routes.url_helpers.url_for("/sources/#{self.id}")
  end

  def display_type
    "#{self.source_type}"
  end

  def self.url_for(source:)
    if source.source_type == 'PubMed'
      "http://www.ncbi.nlm.nih.gov/pubmed/#{source.citation_id}"
    elsif source.source_type == 'ASCO'
      "https://meetinglibrary.asco.org/record/#{source.citation_id}/abstract"
    elsif source.source_type == 'ASH'
      "https://doi.org/#{source.citation_id}"
    end
  end

    def self.timepoint_query
      ->(x) {
        self.joins(:evidence_items)
          .group('sources.id')
          .select('sources.id')
          .where("evidence_items.status != 'rejected'")
          .distinct
          .having('MIN(evidence_items.created_at) >= ?', x)
          .count
      }
    end

    private
    def citation_id_format_matches_source_type
      if source_type == 'PubMed'
        unless citation_id =~ /\A\d+\z/
          errors.add(:citation_id, "#{citation_id} doesn't appear to be a valid PubMed ID")
        end
      elsif source_type == 'ASCO'
        unless citation_id =~ /\A\d+\z/
          errors.add(:citation_id, "#{citation_id} doesn't appear to be a valid ASCO Abstract ID")
        end
      elsif source_type == 'ASH'
        unless citation_id =~ /\A10.1182\/blood[-._;()\/:A-Z0-9]+\z/i
          errors.add(:citation_id, "#{citation_id} doesn't appear to be a valid ASH Abstract DOI")
        end
      else
        errors.add(:source_type, "Unexpected Source Type: #{source_type}")
      end
    end
end
