module Types::Entities
  class MyVariantInfoType < Types::BaseObject
    field :my_variant_info_id, String, null: false
    field :clinvar_id, Int, null: true
    field :clinvar_clinical_significance, [ String ], null: false
    field :clinvar_hgvs_coding, [ String ], null: false
    field :clinvar_hgvs_genomic, [ String ], null: false
    field :clinvar_hgvs_non_coding, [ String ], null: false
    field :clinvar_hgvs_protein, [ String ], null: false
    field :clinvar_omim, String, null: true
    field :snpeff_snp_effect, [ String ], null: false
    field :snpeff_snp_impact, [ String ], null: false
    field :gnomad_exome_allele_frequency, Float, null: true
    field :gnomad_exome_allele_count, Int, null: true
    field :gnomad_exome_allele_number, Int, null: true
    field :gnomad_exome_filter, String, null: true
    field :gnomad_genome_allele_frequency, Float, null: true
    field :gnomad_genome_allele_count, Int, null: true
    field :gnomad_genome_allele_number, Int, null: true
    field :gnomad_genome_filter, String, null: true
    field :dbsnp_rsid, String, null: true
    field :dbnsfp_interpro_domain, [ String ], null: false
    field :phylo_p100way, Float, null: true
    field :phylo_p30way, Float, null: true
    field :phastcons_100way, Float, null: true
    field :phastcons_30way, Float, null: true
    field :gerp, Float, null: true
    field :siphy, Float, null: true
    field :egl_class, String, null: true
    field :egl_protein, String, null: true
    field :egl_transcript, String, null: true
    field :egl_hgvs, [ String ], null: false
    field :cosmic_id, String, null: true
    field :revel_score, [ Float ], null: true
    field :sift_prediction, [ String ], null: false
    field :sift_score, [ Float ], null: false
    field :polyphen2_hdiv_prediction, [ String ], null: false
    field :polyphen2_hdiv_score, [ Float ], null: false
    field :polyphen2_hvar_prediction, [ String ], null: false
    field :polyphen2_hvar_score, [ Float ], null: false
    field :lrt_prediction, String, null: true
    field :lrt_score, Float, null: true
    field :mutationtaster_prediction, [ String ], null: false
    field :mutationtaster_score, [ Float ], null: false
    field :mutationassessor_prediction, [ String ], null: false
    field :mutationassessor_score, [ Float ], null: false
    field :fathmm_prediction, [ String ], null: false
    field :fathmm_score, [ Float ], null: false
    field :provean_prediction, [ String ], null: false
    field :provean_score, [ Float ], null: false
    field :metasvm_prediction, String, null: true
    field :metasvm_score, Float, null: true
    field :metalr_prediction, String, null: true
    field :metalr_score, Float, null: true
    field :cadd_consequence, [ String ], null: false
    field :cadd_detail, [ String ], null: false
    field :cadd_score, Float, null: true
    field :cadd_phred, Float, null: true
    field :fathmm_mkl_prediction, String, null: true
    field :fathmm_mkl_score, Float, null: true
    field :fitcons_score, Float, null: true
    field :exac_allele_count, Int, null: true
    field :exac_allele_number, Int, null: true
    field :exac_allele_frequency, Float, null: true
  end
end
