module BrowseTableDownloads
  module Formatters
    class Assertions < Formatter
      def self.columns
        [
          [ "id", ->(r) { r.id } ],
          [ "molecular_profile", ->(r) { name_for(r.molecular_profile) } ],
          [ "disease", ->(r) { name_for(r.disease) } ],
          [ "therapies", ->(r) { names(r.therapies) } ],
          [ "therapy_interaction_type", ->(r) { r.respond_to?(:therapy_interaction_type) ? r.therapy_interaction_type : nil } ],
          [ "summary", ->(r) { r.summary&.squish } ],
          [ "assertion_type", ->(r) { r.assertion_type } ],
          [ "assertion_direction", ->(r) { r.assertion_direction } ],
          [ "significance", ->(r) { r.significance } ],
          [ "amp_level", ->(r) { r.amp_level } ],
          [ "evidence_items_count", ->(r) { r.evidence_items_count } ],
          [ "status", ->(r) { r.status } ],
        ]
      end
    end
  end
end
