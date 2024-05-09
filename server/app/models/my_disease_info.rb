class MyDiseaseInfo
  attr_reader :disease

  def initialize(disease)
    @disease = disease
  end

  def response
    Rails.cache.fetch(cache_key(disease), expires_in: 24.hours) do
      if disease.doid.present?
        resp = make_request(disease)
        parse_response(resp)
      else
        nil
      end
    end
    rescue StandardError
      nil
  end


  def parse_response(resp)
    p = JSON.parse(resp)
    if p['hits'] && p['hits'].size > 1
      return nil #it was ambiguous somehow, shouldn't happen with a DOID
    end

    if p['hits'] && p['hits'].size == 1
      data = p['hits'][0]['disease_ontology']

      do_def, do_def_citations = process_do_def(data.dig('def'))

      mondo_data = p['hits'][0].dig('mondo')
      mondo_def = process_mondo_def(mondo_data)

      return {
        'disease_ontology_exact_synonyms': Array(data.dig('synonyms', 'exact')),
        'disease_ontology_related_synonyms': Array(data.dig('synonyms', 'related')),
        'mesh': data.dig('xrefs', 'mesh'),
        'icdo': data.dig('xrefs', 'icdo'),
        'icd10': data.dig('xrefs', 'icd10'),
        'ncit': Array(data.dig('xrefs', 'ncit')),
        'omim': data.dig('xrefs', 'omim'),
        'do_def': do_def,
        'do_def_citations': do_def_citations,
        'mondo_def': mondo_def,
        'mondo_id': mondo_data.dig('mondo')
      }
    end

    return nil
  end

  def fields
    [
      'disease_ontology.def',
      'disease_ontology.name',
      'disease_ontology.synonyms.exact',
      'disease_ontology.synonyms.related',
      'disease_ontology.xrefs.mesh',
      'disease_ontology.xrefs.ncit	',
      'disease_ontology.xrefs.omim',
      'disease_ontology.xrefs.icd10',
      'disease_ontology.xrefs.icdo',
      'mondo.definition',
      'mondo.mondo',
    ]
  end

  def make_request(disease)
    query_fields = fields.join(',')
    url = "https://mydisease.info/v1/query?q=mondo.xrefs.doid:\"DOID:#{disease.doid}\"&fields=#{query_fields}"
    Scrapers::Util.make_get_request(url)
  end

  def cache_key(disease)
    "my_disease_info_#{disease.id}_#{disease.updated_at}"
  end

  def process_mondo_def(mondo_data)
    if md = mondo_data.dig('definition')
      md.gsub(/\[(.+)\]/, '').strip
    else
      nil
    end
  end

  def process_do_def(string)
    if match = string.match(/"(.+)" *\[(.+)\]/)
      def_text, urls = match.captures
      processed_urls = urls.split(",").map(&:strip).map { |x| x.split(":",2)[1].gsub('\\', '') } rescue []
      return [def_text, processed_urls]
    else
      return [string, []]
    end
  end
end
