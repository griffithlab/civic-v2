class VariantType < ActiveRecord::Base
  has_and_belongs_to_many :variants
  has_and_belongs_to_many :pipeline_types

  def url
    if self.soid != "N/A"
      "http://www.sequenceontology.org/browser/current_svn/term/#{self.soid}"
    else
      nil
    end
  end
  #acts_as_nested_set

  #def relationship_with(other)
  #  if self == other
  #    :is
  #  elsif self.is_descendant_of?(other)
  #    :child
  #  elsif self.is_ancestor_of?(other)
  #    :parent
  #  else
  #    :none
  #  end
  #end
end
