class VariantType < ActiveRecord::Base
  acts_as_nested_set

  has_and_belongs_to_many :variants
  has_and_belongs_to_many :pipeline_types
  enum regulatory_fusion_type: Constants::REGULATORY_FUSION_ENUM_TYPES

  def url
    if self.soid != "N/A"
      "http://www.sequenceontology.org/browser/current_svn/term/#{self.soid}"
    else
      nil
    end
  end

  def link
    Rails.application.routes.url_helpers.url_for("/variant-types/#{self.id}")
  end

  def relationship_with(other)
    if self == other
      :is
    elsif self.is_descendant_of?(other)
      :child
    elsif self.is_ancestor_of?(other)
      :parent
    else
      :none
    end
  end
end
