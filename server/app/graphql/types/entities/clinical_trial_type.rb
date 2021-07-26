module Types::Entities
  class ClinicalTrialType < Types::BaseObject
    field :id, Int, null: false
    field :nct_id, String, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :url, String, null: false

    def url
      "https://clinicaltrials.gov/ct2/show/#{object.nct_id}"
    end
  end
end
