module BrowseTableDownloads
  module Formatters
    class EvidenceItems < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "molecular_profile", ->(r) { name_for(r.molecular_profile) } ],
          [ "disease", ->(r) { name_for(r.disease) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "therapy_interaction_type", ->(r) { r.respond_to?(:therapy_interaction_type) ? r.therapy_interaction_type : nil } ],
          [ "description", ->(r) { r.description&.squish } ],
          [ "evidence_level", ->(r) { r.evidence_level } ],
          [ "evidence_type", ->(r) { r.evidence_type } ],
          [ "evidence_direction", ->(r) { r.evidence_direction } ],
          [ "significance", ->(r) { r.significance } ],
          [ "variant_origin", ->(r) { r.variant_origin } ],
          [ "rating", ->(r) { r.rating } ],
          [ "status", ->(r) { r.status } ],
        ]
      end
    end
  end
end
