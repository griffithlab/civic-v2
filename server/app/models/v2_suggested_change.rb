class V2SuggestedChange < ApplicationRecord
  belongs_to :subject, polymorphic: true
end
