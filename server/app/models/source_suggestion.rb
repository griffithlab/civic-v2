class SourceSuggestion < ActiveRecord::Base
  belongs_to :source
  belongs_to :user

  validates :status, inclusion: { in: ['new', 'curated', 'rejected' ] }
end
