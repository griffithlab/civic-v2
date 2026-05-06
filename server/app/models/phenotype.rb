class Phenotype < ActiveRecord::Base
  has_and_belongs_to_many :evidence_items
  has_and_belongs_to_many :assertions

  include Graph::HasGraphStructure

  def display_name
    self.hpo_class
  end

  def link
    Rails.application.routes.url_helpers.url_for("/phenotypes/#{self.id}")
  end

  def url
    "https://hpo.jax.org/app/browse/term/#{self.hpo_id}"
  end
end
