class OpenCravat
  attr_reader :variant

  def initialize(variant)
    @variant = variant
  end

  def response
    Rails.cache.fetch(cache_key(variant), expires_in: 24.hours) do
      if variant.open_cravat_url_parameters.present?
        response = make_request(variant.open_cravat_url_parameters)
        parse_response(response)
      else
        nil
      end
    end
  rescue StandardError => e
    nil
  end

  def parse_response(response)
    p = JSON.parse(response)
    benignity = {}
    pathogenicity = {}
    p.each do |predictor, results|
      if results && [ "bp4_benign", "pp3_pathogenic" ].all? { |key| results.key?(key) }
        benignity[predictor] = results.dig("bp4_benign")
        pathogenicity[predictor] = results.dig("pp3_pathogenic")
      end
    end
    {
      'benignity': benignity,
      'benignity_counts': benignity.values.compact.tally,
      'benignity_counts_details': benignity.group_by { |k, v| v }.map { |k, v| [ k, v.map(&:first) ] }.to_h,
      'pathogenicity': pathogenicity,
      'pathogenicity_counts': pathogenicity.values.compact.tally,
      'pathogenicity_counts_details': pathogenicity.group_by { |k, v| v }.map { |k, v| [ k, v.map(&:first) ] }.to_h,
    }
  rescue StandardError => e
  end

  def extract_value(p, position, final_key)
    raw_value = p.dig(*position)
    if raw_value.nil?
      []
    elsif raw_value.is_a?(Hash)
      [ raw_value[final_key] ]
    else
      raw_value.map { |v| v[final_key] }.uniq
    end
  end

  def annotators
    [
      "alphamissense",
      "bayesdel",
      "cadd",
      "cadd_exome",
      "dann",
      "dann_coding",
      "esm1b",
      "fathmm",
      "fathmm_mkl",
      "fathmm_xf_coding",
      "gerp",
      "metalr",
      "metarnn",
      "metasvm",
      "mistic",
      "mutation_assessor",
      "mutationtaster",
      "mutpred1",
      "phdsnpg",
      "phylop",
      "primateai",
      "provean",
      "revel",
      "sift",
      "varity_r",
      "vest"
    ]
  end

  private
  def make_request(open_cravat_url_parameters)
    Scrapers::Util.make_get_request(open_cravat_url(open_cravat_url_parameters))
  end

  def open_cravat_url(open_cravat_url_parameters)
    annotator_list = annotators.join(",")
    "https://run.opencravat.org/submit/annotate?#{open_cravat_url_parameters}&annotators=#{annotator_list}"
  end

  def cache_key(variant)
    "open_cravat_#{variant.id}_#{variant.updated_at}"
  end
end
