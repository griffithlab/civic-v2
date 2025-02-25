class MyVariantInfo
  attr_reader :variant

  def initialize(variant)
    @variant = variant
  end

  def response
    Rails.cache.fetch(cache_key(variant), expires_in: 24.hours) do
      if hgvs = HgvsDescription.my_gene_info_hgvs(variant)
        response = make_request(hgvs)
        parse_response(response, hgvs)
      else
        nil
      end
    end
  rescue StandardError => e
    nil
  end

  def parse_response(response, hgvs)
    p = JSON.parse(response)
    {
      'my_variant_info_id': hgvs,
      'clinvar_id': p.dig("clinvar", "variant_id"),
      'clinvar_clinical_significance': extract_value(p, [ "clinvar", "rcv" ], "clinical_significance"),
      'clinvar_hgvs_coding': Array(p.dig("clinvar", "hgvs", "coding")),
      'clinvar_hgvs_genomic': Array(p.dig("clinvar", "hgvs", "genomic")),
      'clinvar_hgvs_non_coding': Array(p.dig("clinvar", "hgvs", "non-coding")),
      'clinvar_hgvs_protein': Array(p.dig("clinvar", "hgvs", "protein")),
      'clinvar_omim': p.dig("clinvar", "omim"),
      'snpeff_snp_effect': extract_value(p, [ "snpeff", "ann" ], "effect"),
      'snpeff_snp_impact': extract_value(p, [ "snpeff", "ann" ], "putative_impact"),
      'gnomad_exome_allele_frequency': p.dig("gnomad_exome", "af", "af"),
      'gnomad_exome_allele_count': p.dig("gnomad_exome", "ac", "ac"),
      'gnomad_exome_allele_number': p.dig("gnomad_exome", "an", "an"),
      'gnomad_exome_filter': p.dig("gnomad_exome", "filter"),
      'gnomad_genome_allele_frequency': p.dig("gnomad_genome", "af", "af"),
      'gnomad_genome_allele_count': p.dig("gnomad_genome", "ac", "ac"),
      'gnomad_genome_allele_number': p.dig("gnomad_genome", "an", "an"),
      'gnomad_genome_filter': p.dig("gnomad_genome", "filter"),
      'dbsnp_rsid': p.dig("dbsnp", "rsid"),
      'dbnsfp_interpro_domain': Array(p.dig("dbnsfp", "interpro_domain")).uniq,
      'phylo_p100way': p.dig("dbnsfp", "phylo", "p100way", "vertebrate"),
      'phylo_p30way': p.dig("dbnsfp", "phylo", "p30way", "mammalian"),
      'phastcons_100way': p.dig("dbnsfp", "phastcons", "100way", "vertebrate"),
      'phastcons_30way': p.dig("dbnsfp", "phastcons", "30way", "mammalian"),
      'gerp': p.dig("dbnsfp", "gerp++", "rs"),
      'siphy': p.dig("dbnsfp", "siphy_29way", "logodds"),
      'egl_class': p.dig("emv", "egl_classification"),
      'egl_protein': p.dig("emv", "egl_protein"),
      'egl_transcript': p.dig("emv", "egl_variant"),
      'egl_hgvs': Array(p.dig("emv", "hgvs")),
      'cosmic_id': p.dig("cosmic", "cosmic_id"),
      'revel_score': Array(p.dig("dbnsfp", "revel", "score")),
      'sift_prediction': Array(p.dig("dbnsfp", "sift", "pred")).reject { |p| p == "." },
      'sift_score': Array(p.dig("dbnsfp", "sift", "score")),
      'polyphen2_hdiv_prediction': Array(p.dig("dbnsfp", "polyphen2", "hdiv", "pred")).reject { |p| p == "." },
      'polyphen2_hdiv_score': Array(p.dig("dbnsfp", "polyphen2", "hdiv", "score")),
      'polyphen2_hvar_prediction': Array(p.dig("dbnsfp", "polyphen2", "hvar", "pred")).reject { |p| p == "." },
      'polyphen2_hvar_score': Array(p.dig("dbnsfp", "polyphen2", "hvar", "score")),
      'lrt_prediction': p.dig("dbnsfp", "lrt", "pred"),
      'lrt_score': p.dig("dbnsfp", "lrt", "score"),
      'mutationtaster_prediction': Array(p.dig("dbnsfp", "mutationtaster", "pred")).reject { |p| p == "." },
      'mutationtaster_score': Array(p.dig("dbnsfp", "mutationtaster", "score")),
      'mutationassessor_prediction': Array(p.dig("dbnsfp", "mutationassessor", "pred")).reject { |p| p == "." },
      'mutationassessor_score': Array(p.dig("dbnsfp", "mutationassessor", "score")),
      'fathmm_prediction': Array(p.dig("dbnsfp", "fathmm", "pred")).reject { |p| p == "." },
      'fathmm_score': Array(p.dig("dbnsfp", "fathmm", "score")),
      'provean_prediction': Array(p.dig("dbnsfp", "provean", "pred")).reject { |p| p == "." },
      'provean_score': Array(p.dig("dbnsfp", "provean", "score")),
      'metasvm_prediction': p.dig("dbnsfp", "metasvm", "pred"),
      'metasvm_score': p.dig("dbnsfp", "metasvm", "score"),
      'metalr_prediction': p.dig("dbnsfp", "metalr", "pred"),
      'metalr_score': p.dig("dbnsfp", "metalr", "score"),
      'cadd_consequence': Array(p.dig("cadd", "consequence")),
      'cadd_detail': Array(p.dig("cadd", "consdetail")),
      'cadd_score': p.dig("cadd", "rawscore"),
      'cadd_phred': p.dig("cadd", "phred"),
      'fathmm_mkl_prediction': p.dig("dbnsfp", "fathmm-mkl", "coding_pred"),
      'fathmm_mkl_score': p.dig("dbnsfp", "fathmm-mkl", "coding_score"),
      'fitcons_score': p.dig("dbnsfp", "integrated", "fitcons_score"),
      'exac_allele_count': p.dig("exac", "ac", "ac_adj"),
      'exac_allele_number': p.dig("exac", "an", "an_adj"),
      'exac_allele_frequency': p.dig("dbnsfp", "exac", "adj_af")
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

  def primary_fields
    [
      "clinvar.variant_id",
      "clinvar.rcv.clinical_significance",
      "cosmic.cosmic_id",
      "dbsnp.rsid",
      "emv.egl_classification",
      "exac_nontcga.adj_af",
      "snpeff.ann.effect",
      "snpeff.ann.putative_impact",
      "exac.an.an_adj",
      "exac.ac.ac_adj",
      "gnomad_exome.ac.ac",
      "gnomad_exome.af.af",
      "gnomad_exome.an.an",
      "gnomad_exome.filter",
      "gnomad_genome.ac.ac",
      "gnomad_genome.af.af",
      "gnomad_genome.an.an",
      "gnomad_genome.filter"
    ]
  end

  def secondary_fields
    [
      "cadd.consdetail",
      "cadd.consequence",
      "cadd.sift.cat",
      "cadd.sift.val",
      "cadd.polyphen.cat",
      "cadd.polyphen.val",
      "cadd.rawscore",
      "cadd.phred",
      "clinvar.hgvs.coding",
      "clinvar.hgvs.genomic",
      "clinvar.hgvs.non-coding",
      "clinvar.hgvs.protein",
      "clinvar.omim",
      "dbnsfp",
      "emv.egl_protein",
      "emv.egl_variant",
      "emv.hgvs",
      "gnomad_exome.alleles",
      "gnomad_exome.chrom",
      "gnomad_exome.pos",
      "gnomad_exome.type",
      "gnomad_genome.alleles",
      "gnomad_genome.chrom",
      "gnomad_genome.pos",
      "gnomad_genome.type"
    ]
  end

  private
  def make_request(hgvs)
    Scrapers::Util.make_get_request(my_variant_info_url(hgvs))
  end

  def my_variant_info_url(coordinate_string)
    all_fields = (primary_fields + secondary_fields).join(",")
    "https://myvariant.info/v1/variant/#{CGI.escape(coordinate_string)}?fields=#{all_fields}"
  end

  def cache_key(variant)
    "myvariant_info_#{variant.id}_#{variant.updated_at}"
  end
end
