class AdvancedSearch < ApplicationRecord
  before_create :generate_id_token

  private
  def generate_id_token
    unless self.token.present?
      self.token = SecureRandom.uuid
    end
  end
end
