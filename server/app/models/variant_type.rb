class VariantType < ActiveRecord::Base
  include Graph::HasGraphStructure

  has_and_belongs_to_many :variants
  has_and_belongs_to_many :pipeline_types

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
end
