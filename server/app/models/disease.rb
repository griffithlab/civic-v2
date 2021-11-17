class Disease < ApplicationRecord
  has_many :evidence_items
  has_many :assertions
  has_and_belongs_to_many :disease_aliases

  def disease_url
    Disease.url_for_doid(doid)
  end

  def self.url_for_doid(doid)
    if doid.nil?
      nil
    else
      "http://www.disease-ontology.org/?id=DOID:#{doid}"
    end

  end
end
