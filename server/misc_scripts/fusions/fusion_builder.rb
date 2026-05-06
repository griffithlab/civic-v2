# run after backfill variant coords
require 'net/http'
require 'json'
require 'uri'

fusions = VariantType.where(name: 'transcript_fusion').first.variants
@cache = {}

def call_api(url, key = nil)
  if key && @cache.has_key?(key)
    @cache[key]
  else
    resp = Scrapers::Util.make_get_request(url)
    binding.irb
    data = JSON.parse(resp)
    @cache[key] = data if key
  end
end

def call_fusion_builder(chr:, start:, stop:, transcript:)
  q = {
    chromosome: chr,
    start: start,
    end: stop,
    transcript: transcript,
  }

  res = call_api("http://fusion-builder.cancervariants.org/api/utilities/get_exon?#{q.to_query}")
  binding.irb
end

begin
  fusions.find_each do |variant|
    (five_prime_gene_symbol, three_prime_gene_symbol) = variant.name.split(" ").first.split("::")

    if variant.chromosome.present? && five_prime_gene_symbol.present?
      call_fusion_builder(chr: variant.chromosome, start: variant.start, stop: variant.stop, transcript: variant.representative_transcript)
    end
  end

rescue StandardError => e
  binding.irb
end
