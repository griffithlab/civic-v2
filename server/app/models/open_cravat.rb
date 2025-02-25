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
      'cadd_exome': p.dig("cadd_exome", "benign"),
      'cadd': p.dig("cadd", "benign"),
      'revel': p.dig("revel", "benign"),
      'sift': p.dig("sift", "benign"),
      'gerp': p.dig("gerp", "benign"),
      'phylop': p.dig("phylop", "benign"),
      'vest': p.dig("vest", "benign"),
      'bayesdel': p.dig("bayesdel", "benign")
    }
    pathogenicity = {
      'cadd_exome': p.dig("cadd_exome", "pathogenic"),
      'cadd': p.dig("cadd", "pathogenic"),
      'revel': p.dig("revel", "pathogenic"),
      'sift': p.dig("sift", "pathogenic"),
      'fathmm': p.dig("fathmm", "fathmm_pathogenicity")&.sub("PP3 ", ""),
      'phylop': p.dig("phylop", "pathogenic"),
      'vest': p.dig("vest", "pathogenic"),
      'bayesdel': p.dig("bayesdel", "pathogenic")
    }
    {
      'benignity': benignity,
      'benignity_counts': benignity.values.compact.tally,
      'benignity_counts_details': benignity.group_by { |k, v| v }.map { |k, v| [ k, v.map(&:first) ] }.to_h,
      'pathogenicity': pathogenicity,
      'pathogenicity_counts': pathogenicity.values.compact.tally,
      'pathogenicity_counts_details': pathogenicity.group_by { |k, v| v }.map { |k, v| [ k, v.map(&:first) ] }.to_h
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
