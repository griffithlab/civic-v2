class MolecularProfile < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable

  has_and_belongs_to_many :variants
  has_many :evidence_items

  validates :name, presence: true

  GENE_REGEX = /#GID(?<id>\d+)/i
  VARIANT_REGEX = /#VID(?<id>\d+)/i

  def mpid
    "MPID#{self.id}"
  end

  def display_name
    segments.map { |s| s.respond_to?(:name) ? s.name : s }.join(' ')
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
