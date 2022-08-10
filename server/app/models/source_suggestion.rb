class SourceSuggestion < ActiveRecord::Base
  include Subscribable

  belongs_to :source
  belongs_to :user
  belongs_to :disease, optional: true
  belongs_to :gene, optional: true
  belongs_to :variant, optional: true
  belongs_to :molecular_profile, optional: true

  validates :status, inclusion: { in: ['new', 'curated', 'rejected' ] }
end
