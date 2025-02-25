module Scrapers
  module Util
    def self.make_get_request(url)
      uri = URI(url)
      res = nil
      loop  do
        res = Net::HTTP.get_response(uri)
        break unless res.is_a?(Net::HTTPRedirection)
        uri = URI(res["location"])
      end
      raise StandardError.new(res.body) unless res.code == "200"
      res.body
    end
  end
end
