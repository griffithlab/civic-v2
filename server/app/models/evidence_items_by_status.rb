class EvidenceItemsByStatus < ActiveRecord::Base
  belongs_to :molecular_profile

  self.primary_key = :molecular_profile_id

  private
  def readonly?
    true
  end
end
