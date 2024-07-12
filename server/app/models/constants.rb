module Constants
  TIMESPAN_MAP = {
    'today' => Date.today.to_time,
    'this_week' => 1.week.ago,
    'this_month' => 1.month.ago,
    'this_year' => 1.year.ago,
    'all_time' => DateTime.parse('1970-01-01 00:00:00')

  }

  DISPLAY_NAME_QUERY = 'users.username ILIKE :query OR users.email ILIKE :query OR users.name ILIKE :query'

  EVIDENCE_TYPES = [:Diagnostic, :Prognostic, :Predictive, :Predisposing, :Functional, :Oncogenic]
  ASSERTION_TYPES = [:Diagnostic, :Prognostic, :Predictive, :Predisposing, :Oncogenic]

  EVIDENCE_LEVELS = [:A, :B, :C, :D, :E]

  EVIDENCE_DIRECTIONS = ['Supports', 'Does Not Support', 'N/A']

  EVIDENCE_STATUS = ['accepted', 'submitted', 'rejected']

  VARIANT_ORIGINS = ['Somatic', 'Rare Germline', 'Common Germline', 'Unknown', 'N/A', 'Combined']

  SIGNIFICANCES = [
    'Sensitivity/Response',
    'Resistance',
    'Better Outcome',
    'Poor Outcome',
    'Positive',
    'Negative',
    'N/A',
    'Adverse Response',
    'Pathogenic',
    'Likely Pathogenic',
    'Benign',
    'Likely Benign',
    'Uncertain Significance',
    'Reduced Sensitivity',
    'Gain of Function',
    'Loss of Function',
    'Unaltered Function',
    'Neomorphic',
    'Unknown',
    'Dominant Negative',
    'Oncogenic',
    'Likely Oncogenic',
    'Predisposition',
    'Protectiveness',
    'Oncogenicity'
  ]

  THERAPY_INTERACTION_TYPES = ['Combination', 'Sequential', 'Substitutes']

  NCCN_GUIDELINES = [
    'Acute Lymphoblastic Leukemia',
    'Acute Myeloid Leukemia',
    'Anal Carcinoma',
    'Bladder Cancer',
    'Bone Cancer',
    'Breast Cancer',
    'Central Nervous System Cancers',
    'Cervical Cancer',
    'Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma',
    'Chronic Myeloid Leukemia',
    'Colon/Rectal Cancer',
    'Colon Cancer',
    'Rectal Cancer',
    'Esophageal and Esophagogastric Junction Cancers',
    'Gastric Cancer',
    'Hairy Cell Leukemia',
    'Head and Neck Cancers',
    'Hepatobiliary Cancers',
    'Hodgkin Lymphoma',
    'Kidney Cancer',
    'Malignant Pleural Mesothelioma',
    'Melanoma',
    'Multiple Myeloma/Other Plasma Cell Neoplasms',
    'Multiple Myeloma',
    'Systemic Light Chain Amyloidosis',
    "Waldenström's Macroglobulinemia / Lymphoplasmacytic Lymphoma",
    'Myelodysplastic Syndromes',
    'Myeloproliferative Neoplasms',
    'Neuroendocrine Tumors',
    "Non-Hodgkin's Lymphomas",
    'B-Cell Lymphomas',
    'Primary Cutaneous B-Cell Lymphomas',
    'T-Cell Lymphomas',
    'Non-Melanoma Skin Cancers',
    'Basal Cell Skin Cancer',
    'Dermatofibrosarcoma Protuberans',
    'Merkel Cell Carcinoma',
    'Squamous Cell Skin Cancer',
    'Non-Small Cell Lung Cancer',
    'Occult Primary',
    'Ovarian Cancer',
    'Pancreatic Adenocarcinoma',
    'Penile Cancer',
    'Prostate Cancer',
    'Small Cell Lung Cancer',
    'Soft Tissue Sarcoma',
    'Testicular Cancer',
    'Thymomas and Thymic Carcinomas',
    'Thyroid Carcinoma',
    'Uterine Neoplasms',
    'Vulvar Cancer',
  ]

  AMP_LEVELS = ['Tier I - Level A', 'Tier I - Level B', 'Tier II - Level C', 'Tier II - Level D', 'Tier III', 'Tier IV', 'Not Applicable']
  
  DB_TYPE_TO_PATH_SEGMENT = {
    'Assertion' => 'assertions',
    'EvidenceItem' => 'evidence',
    'Feature' => 'features',
    'Gene' => 'features',
    'Variant' => 'variants',
    'Variants::GeneVariant' => 'variants',
    'Variants::FactorVariant' => 'variants',
    'Variants::FusionVariant' => 'variants',
    'VariantGroup' => 'variant-groups',
    'Source' => 'sources',
    'MolecularProfile' => 'molecular-profiles'
  }

  VALID_COORDINATE_TYPES = [
    Variants::GeneVariant.valid_coordinate_types,
    Variants::FusionVariant.valid_coordinate_types
  ].flatten

  CIVICBOT_USER_ID = 385
end
