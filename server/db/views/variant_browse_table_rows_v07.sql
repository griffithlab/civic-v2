SELECT outer_variants.id,
  outer_variants.name,
  genes.id as gene_id,
  genes.name as gene_name,
  array_agg(distinct(variant_aliases.name) order by variant_aliases.name) as alias_names,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  array_agg(DISTINCT(variant_types.id)) as variant_types,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total))  FILTER (WHERE diseases.name IS NOT NULL) as diseases,
  json_agg(distinct jsonb_build_object('name', drugs.name, 'id', drugs.id, 'total', drug_count.total))  FILTER (WHERE drugs.name IS NOT NULL) as drugs,
  COUNT(DISTINCT(assertions.id)) as assertion_count
FROM variants outer_variants
LEFT OUTER JOIN variant_aliases_variants ON variant_aliases_variants.variant_id = outer_variants.id
LEFT OUTER JOIN variant_aliases ON variant_aliases.id = variant_aliases_variants.variant_alias_id
INNER JOIN evidence_items ON evidence_items.variant_id = outer_variants.id
INNER JOIN genes ON genes.id = outer_variants.gene_id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
LEFT OUTER JOIN assertions ON assertions.variant_id = outer_variants.id
LEFT OUTER JOIN variant_types_variants ON variant_types_variants.variant_id = outer_variants.id
LEFT OUTER JOIN variant_types ON variant_types_variants.variant_type_id = variant_types.id
LEFT JOIN LATERAL (SELECT drugs.id as drug_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
  INNER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
  WHERE evidence_items.variant_id = outer_variants.id
  GROUP BY drugs.id
) drug_count on drugs.id = drug_count.drug_id

LEFT JOIN LATERAL (SELECT diseases.id as disease_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN diseases ON diseases.id = evidence_items.disease_id
  WHERE evidence_items.variant_id = outer_variants.id
  GROUP BY diseases.id
) disease_count on diseases.id = disease_count.disease_id
WHERE evidence_items.status != 'rejected'
GROUP BY outer_variants.id, outer_variants.name, genes.id, genes.name
