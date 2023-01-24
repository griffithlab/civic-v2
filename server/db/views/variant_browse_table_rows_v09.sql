SELECT outer_variants.id,
  outer_variants.name,
  genes.id as gene_id,
  genes.name as gene_name,
  array_agg(distinct(variant_aliases.name) order by variant_aliases.name) as alias_names,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  array_agg(DISTINCT(variant_types.id)) as variant_types,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total))  FILTER (WHERE diseases.name IS NOT NULL) as diseases,
  json_agg(distinct jsonb_build_object('name', therapies.name, 'id', therapies.id, 'total', therapy_count.total))  FILTER (WHERE therapies.name IS NOT NULL) as therapies,
  COUNT(DISTINCT(assertions.id)) as assertion_count
FROM variants outer_variants
LEFT OUTER JOIN variant_aliases_variants ON variant_aliases_variants.variant_id = outer_variants.id
LEFT OUTER JOIN variant_aliases ON variant_aliases.id = variant_aliases_variants.variant_alias_id
INNER JOIN evidence_items ON evidence_items.variant_id = outer_variants.id
INNER JOIN genes ON genes.id = outer_variants.gene_id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
LEFT OUTER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
LEFT OUTER JOIN assertions ON assertions.variant_id = outer_variants.id
LEFT OUTER JOIN variant_types_variants ON variant_types_variants.variant_id = outer_variants.id
LEFT OUTER JOIN variant_types ON variant_types_variants.variant_type_id = variant_types.id
LEFT JOIN LATERAL (SELECT therapies.id as therapy_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
  INNER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
  WHERE evidence_items.variant_id = outer_variants.id
  GROUP BY therapies.id
) therapy_count on therapies.id = therapy_count.therapy_id

LEFT JOIN LATERAL (SELECT diseases.id as disease_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN diseases ON diseases.id = evidence_items.disease_id
  WHERE evidence_items.variant_id = outer_variants.id
  GROUP BY diseases.id
) disease_count on diseases.id = disease_count.disease_id
WHERE evidence_items.status != 'rejected'
AND outer_variants.deprecated = FALSE
GROUP BY outer_variants.id, outer_variants.name, genes.id, genes.name
