module Constants
  TIMESPAN_MAP = {
    "today" => Date.today.to_time,
    "this_week" => 1.week.ago,
    "this_month" => 1.month.ago,
    "this_year" => 1.year.ago,
    "all_time" => DateTime.parse("1970-01-01 00:00:00"),
  }

  SUPPORTED_REFERENCE_BUILDS = [ :GRCh38, :GRCh37, :NCBI36 ]

  DISPLAY_NAME_QUERY = "users.username ILIKE :query OR users.email ILIKE :query OR users.name ILIKE :query"

  EVIDENCE_TYPES = [ :Diagnostic, :Prognostic, :Predictive, :Predisposing, :Functional, :Oncogenic ]
  ASSERTION_TYPES = [ :Diagnostic, :Prognostic, :Predictive, :Predisposing, :Oncogenic ]

  EVIDENCE_LEVELS = [ :A, :B, :C, :D, :E ]

  EVIDENCE_DIRECTIONS = [ "Supports", "Does Not Support", "N/A" ]

  EVIDENCE_STATUS = [ "accepted", "submitted", "rejected" ]

  VARIANT_ORIGINS = [ "Somatic", "Rare Germline", "Common Germline", "Unknown", "N/A", "Combined" ]

  SIGNIFICANCES = [
    "Sensitivity/Response",
    "Resistance",
    "Better Outcome",
    "Poor Outcome",
    "Positive",
    "Negative",
    "N/A",
    "Adverse Response",
    "Pathogenic",
    "Likely Pathogenic",
    "Benign",
    "Likely Benign",
    "Uncertain Significance",
    "Reduced Sensitivity",
    "Gain of Function",
    "Loss of Function",
    "Unaltered Function",
    "Neomorphic",
    "Unknown",
    "Dominant Negative",
    "Oncogenic",
    "Likely Oncogenic",
    "Predisposition",
    "Protectiveness",
    "Oncogenicity",
  ]

  THERAPY_INTERACTION_TYPES = [ "Combination", "Sequential", "Substitutes" ]

  NCCN_GUIDELINES = [
    "Acute Lymphoblastic Leukemia",
    "Acute Myeloid Leukemia",
    "Anal Carcinoma",
    "Bladder Cancer",
    "Bone Cancer",
    "Breast Cancer",
    "Central Nervous System Cancers",
    "Cervical Cancer",
    "Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma",
    "Chronic Myeloid Leukemia",
    "Colon/Rectal Cancer",
    "Colon Cancer",
    "Rectal Cancer",
    "Esophageal and Esophagogastric Junction Cancers",
    "Gastric Cancer",
    "Hairy Cell Leukemia",
    "Head and Neck Cancers",
    "Hepatobiliary Cancers",
    "Hodgkin Lymphoma",
    "Kidney Cancer",
    "Malignant Pleural Mesothelioma",
    "Melanoma",
    "Multiple Myeloma/Other Plasma Cell Neoplasms",
    "Multiple Myeloma",
    "Systemic Light Chain Amyloidosis",
    "Waldenström's Macroglobulinemia / Lymphoplasmacytic Lymphoma",
    "Myelodysplastic Syndromes",
    "Myeloproliferative Neoplasms",
    "Neuroendocrine Tumors",
    "Non-Hodgkin's Lymphomas",
    "B-Cell Lymphomas",
    "Primary Cutaneous B-Cell Lymphomas",
    "T-Cell Lymphomas",
    "Non-Melanoma Skin Cancers",
    "Basal Cell Skin Cancer",
    "Dermatofibrosarcoma Protuberans",
    "Merkel Cell Carcinoma",
    "Squamous Cell Skin Cancer",
    "Non-Small Cell Lung Cancer",
    "Occult Primary",
    "Ovarian Cancer",
    "Pancreatic Adenocarcinoma",
    "Penile Cancer",
    "Prostate Cancer",
    "Small Cell Lung Cancer",
    "Soft Tissue Sarcoma",
    "Testicular Cancer",
    "Thymomas and Thymic Carcinomas",
    "Thyroid Carcinoma",
    "Uterine Neoplasms",
    "Vulvar Cancer",
  ]

  AMP_LEVELS = [ "Tier I - Level A", "Tier I - Level B", "Tier II - Level C", "Tier II - Level D", "Tier III", "Tier IV", "Not Applicable" ]

  DB_TYPE_TO_PATH_SEGMENT = {
    "Assertion" => "assertions",
    "EvidenceItem" => "evidence",
    "Feature" => "features",
    "Gene" => "features",
    "Fusion" => "features",
    "Variant" => "variants",
    "Variants::GeneVariant" => "variants",
    "Variants::FactorVariant" => "variants",
    "Variants::FusionVariant" => "variants",
    "VariantGroup" => "variant-groups",
    "Source" => "sources",
    "MolecularProfile" => "molecular-profiles",
  }

  VALID_VARIANT_COORDINATE_TYPES = [
    Variants::GeneVariant.valid_variant_coordinate_types,
    Variants::FusionVariant.valid_variant_coordinate_types,
  ].flatten

  VALID_EXON_COORDINATE_TYPES = [
    Variants::FusionVariant.valid_exon_coordinate_types,
  ].flatten

  CIVICBOT_USER_ID = 385

  # http://useast.ensembl.org/info/genome/stable_ids/index.html
  ENSEMBL_TRANSCRIPT_ID_FORMAT = /\AENST\d{11}\.\d{1,2}\z/

  REPRESENTATIVE_FUSION_VARIANT_NAME = "Fusion"

  # INSDC regulatory class vocabulary as required here: https://fusions.cancervariants.org/en/latest/nomenclature.html#regulatory-nomenclature
  REGULATORY_FUSION_TYPES = [
      [ "attenuator", "SO:0000140" ],
      [ "CAAT_signal", "SO:0000172" ],
      [ "DNase_I_hypersensitive_site", "SO:0000685" ],
      [ "enhancer", "SO:0000165" ],
      [ "enhancer_blocking_element", nil ],
      [ "GC_signal", "SO:0000173" ],
      [ "imprinting_control_region", nil ],
      [ "insulator", "SO:0000627" ],
      [ "locus_control_region", "SO:0000037" ],
      [ "matrix_attachment_region", "SO:0000036" ],
      [ "minus_35_signal", "SO:0000176" ],
      [ "minus_10_signal", "SO:0000175" ],
      [ "polyA_signal_sequence", "SO:0000551" ],
      [ "promoter", "SO:0000167" ],
      [ "recoding_stimulatory_region", "SO:1001268" ],
      [ "recombination_enhancer", "SO:0002059" ],
      [ "replication_regulatory_region", "SO:0001682" ],
      [ "response_element", nil ],
      [ "ribosome_binding_site", "SO:0000552" ],
      [ "riboswitch", "SO:0000035" ],
      [ "silencer", "SO:0000625" ],
      [ "TATA_box", "SO:0000174" ],
      [ "terminator", "SO:0000141" ],
      [ "transcriptional_cis_regulatory_region", "SO:0001055" ],
      [ "uORF", "SO:0002027" ],
      [ "other", nil ],
    ]

  REGULATORY_FUSION_ENUM_TYPES = REGULATORY_FUSION_TYPES.map { |(type, _)| [ type, type ] }.to_h

  FUSION_PARTNER_STATUSES = [ "known", "unknown", "multiple", "regulatory" ].map { [ _1, _1 ] }.to_h

  API_HMAC_KEY = ENV["CIVIC_API_HMAC_KEY"] || Rails.application.credentials.api_hmac_key
end
