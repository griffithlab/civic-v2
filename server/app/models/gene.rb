class Gene < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable

  has_many :variants
  has_many :assertions
  has_many :variant_groups
  has_and_belongs_to_many :sources
  has_and_belongs_to_many :gene_aliases

  searchkick highlight: [:symbol, :aliases]
  scope :search_import, -> { includes(:gene_aliases) }

  def search_data
    {
      name: name,
      aliases: gene_aliases.map(&:name)
    }
  end
end
