SELECT evidence_items.id,
  genes.name as gene_name,
  variants.name as variant_name,
  diseases.name as disease_name,
  array_agg(DISTINCT(drugs.name) order by drugs.name) as drug_names,
  evidence_items.status,
  evidence_items.description,
  evidence_items.evidence_direction,
  evidence_items.evidence_level,
  evidence_items.rating as evidence_rating,
  evidence_items.evidence_type,
  evidence_items.variant_origin,
  evidence_items.clinical_significance
FROM evidence_items
INNER JOIN variants on evidence_items.variant_id = variants.id
INNER JOIN genes on variants.gene_id = genes.id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
WHERE evidence_items.status != 'rejected'
GROUP BY evidence_items.id, 
evidence_items.status, evidence_items.description, evidence_items.evidence_direction,
evidence_items.evidence_level, evidence_items.rating, evidence_items.evidence_type,
evidence_items.variant_origin, evidence_items.clinical_significance, genes.name, variants.name, disease_name
