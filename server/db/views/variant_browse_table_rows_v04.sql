SELECT variants.id,
  variants.name,
  variants.civic_actionability_score AS evidence_score,
  genes.id as gene_id,
  genes.name as gene_name,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id))  FILTER (WHERE diseases.name IS NOT NULL)  as diseases,
  json_agg(distinct jsonb_build_object('name', drugs.name, 'id', drugs.id))  FILTER (WHERE drugs.name IS NOT NULL)  as drugs,
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
GROUP BY variants.id, variants.name, variants.civic_actionability_score, genes.id, genes.name
