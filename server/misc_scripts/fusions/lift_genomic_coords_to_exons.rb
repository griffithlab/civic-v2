# run after backfill variant coords
require 'net/http'
require 'json'
require 'uri'

fusions = VariantType.where(name: 'transcript_fusion').first.variants
@cache = {}

def call_api(url, key)
  if @cache.has_key?(key)
    @cache[key]
  else
    resp = Scrapers::Util.make_get_request(url)
    data = JSON.parse(resp)
    @cache[key] = data
  end
end

# hgnc symbol?
def get_ensembl_id(gene_symbol)
  key =  "#{gene_symbol}:ensembl_id"
  url ="https://grch37.rest.ensembl.org/xrefs/symbol/human/#{gene_symbol}?object_type=gene;content-type=application/json"
  data = call_api(url, key)
  ensembl_candidates = data.select { |gene| gene["id"] =~ /^ENSG/ }
  if ensembl_candidates.size > 1
    binding.irb
    raise StandardError.new("More than one match found for #{gene_symbol}")
  elsif ensembl_candidates.size == 0
    raise StandardError.new("No matches found for #{gene_symbol}")
  end

  ensembl_candidates.first['id']
end

def get_exons_for_region(region)
  key = "#{region}::exons"
  url = "https://grch37.rest.ensembl.org/overlap/region/human/#{region}?feature=exon;content-type=application/json"
  data = call_api(url, key)
  data.sort_by { |exon| exon['start'] }
end

# exon vs cds?
def get_exons_for_ensembl_id(ensembl_id)
  key = "#{ensembl_id}::exons"
  url = "https://grch37.rest.ensembl.org/overlap/id/#{ensembl_id}?content-type=application/json;feature=exon"
  data = call_api(url, key)
  data.sort_by { |exon| exon['start'] }
end

begin
  fusions.find_each do |variant|
    (five_prime_gene_symbol, three_prime_gene_symbol) = variant.name.split(" ").first.split("::")

    if variant.chromosome.present? && five_prime_gene_symbol.present?
      ensembl_gene_id = get_ensembl_id(five_prime_gene_symbol)
      gene_exons = get_exons_for_ensembl_id(ensembl_gene_id)
      transcript_exons = get_exons_for_ensembl_id(variant.representative_transcript)
      variant_exons = get_exons_for_region("#{variant.chromosome}:#{variant.start}-#{variant.stop}")
      binding.irb
    end
  end

rescue StandardError => e
  binding.irb
end
