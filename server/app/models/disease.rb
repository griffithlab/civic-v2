class Disease < ActiveRecord::Base
  has_many :evidence_items

  def disease_url
    if doid.nil?
      nil
    else
      "http://www.disease-ontology.org/?id=DOID:#{doid}"
    end
  end
end
