class ApiKey < ApplicationRecord
  TOKEN_PREFIX = "cvc_"
  TOKEN_LENGTH = 36

  belongs_to :bearer, polymorphic: true
  before_create :generate_token

  # only available on initial creation
  attr_accessor :token

  def self.find_by_token(token)
    digest = OpenSSL::HMAC.hexdigest("SHA256", Constants::API_HMAC_KEY, token)
    find_by(token_digest: digest, revoked: false)
  end

  private
  def generate_token
    random = SecureRandom.base58(TOKEN_LENGTH)
    @token = [ ApiKey::TOKEN_PREFIX, random ].join
    self.token_prefix = TOKEN_PREFIX
    self.token_suffix = random[-5..]
    self.token_digest = OpenSSL::HMAC.hexdigest("SHA256", Constants::API_HMAC_KEY, token)
  end
end
