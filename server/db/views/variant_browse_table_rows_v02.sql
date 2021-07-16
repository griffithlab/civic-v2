SELECT variants.id,
  variants.name,
  variants.civic_actionability_score AS evidence_score,
  genes.name as gene_name,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  array_agg(DISTINCT(diseases.name) order by diseases.name) as disease_names,
  array_agg(DISTINCT(drugs.name) order by drugs.name) as drug_names,
  array_agg(DISTINCT(variant_types.id)) as variant_types,
  COUNT(DISTINCT(assertions.id)) as assertion_count
FROM variants
INNER JOIN evidence_items ON evidence_items.variant_id = variants.id
INNER JOIN genes ON genes.id = variants.gene_id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
LEFT OUTER JOIN assertions ON assertions.variant_id = variants.id
LEFT OUTER JOIN variant_types_variants ON variant_types_variants.variant_id = variants.id
LEFT OUTER JOIN variant_types ON variant_types_variants.variant_type_id = variant_types.id
WHERE evidence_items.status != 'rejected'
GROUP BY variants.id, variants.name, variants.civic_actionability_score, genes.name
