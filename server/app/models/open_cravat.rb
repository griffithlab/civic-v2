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
    benignity = {
      'cadd_exome': p.dig("cadd_exome", "bp4_benign"),
      'cadd': p.dig("cadd", "bp4_benign"),
      'revel': p.dig("revel", "bp4_benign"),
      'sift': p.dig("sift", "bp4_benign"),
      'gerp': p.dig("gerp", "bp4_benign"),
      'phylop': p.dig("phylop", "bp4_benign"),
      'vest': p.dig("vest", "bp4_benign"),
      'bayesdel': p.dig("bayesdel", "bp4_benign"),
    }
    pathogenicity = {
      'cadd_exome': p.dig("cadd_exome", "pp3_pathogenic"),
      'cadd': p.dig("cadd", "pp3_pathogenic"),
      'revel': p.dig("revel", "pp3_pathogenic"),
      'sift': p.dig("sift", "pp3_pathogenic"),
      'fathmm': p.dig("fathmm", "pp3_pathogenic"),
      'phylop': p.dig("phylop", "pp3_pathogenic"),
      'vest': p.dig("vest", "pp3_pathogenic"),
      'bayesdel': p.dig("bayesdel", "pp3_pathogenic"),
    }
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
      "bayesdel",
      "cadd",
      "cadd_exome",
      "fathmm",
      "gerp",
      "phylop",
      "primateai",
      "revel",
      "sift",
      "vest",
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
