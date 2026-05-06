SELECT diseases.id,
  diseases.name,
  diseases.display_name,
  diseases.doid,
  array_agg(DISTINCT(genes.name)) as gene_names,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  COUNT(DISTINCT(variants.id)) as variant_count,
  COUNT(DISTINCT(assertions.id)) as assertion_count,
  COUNT(DISTINCT(genes.id)) as gene_count
FROM diseases
INNER JOIN evidence_items on diseases.id = evidence_items.disease_id
LEFT OUTER JOIN assertions_evidence_items on assertions_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN assertions on assertions_evidence_items.assertion_id = assertions.id
INNER JOIN molecular_profiles on molecular_profiles.id = evidence_items.molecular_profile_id
INNER JOIN molecular_profiles_variants on molecular_profiles_variants.molecular_profile_id = molecular_profiles.id
INNER JOIN variants on variants.id = molecular_profiles_variants.variant_id
INNER JOIN genes on genes.id = variants.gene_id
WHERE evidence_items.status != 'rejected'
AND diseases.deprecated = false
GROUP BY diseases.id, diseases.name, diseases.doid
