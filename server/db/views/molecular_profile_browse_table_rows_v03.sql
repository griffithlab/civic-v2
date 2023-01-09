SELECT outer_mps.id,
  outer_mps.name,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  array_agg(distinct(molecular_profile_aliases.name) order by molecular_profile_aliases.name) as alias_names,
  json_agg(distinct jsonb_build_object('name', genes.name, 'id', genes.id))  FILTER (WHERE genes.name IS NOT NULL) as genes,
  json_agg(distinct jsonb_build_object('name', variants.name, 'id', variants.id))  FILTER (WHERE variants.name IS NOT NULL) as variants,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total))  FILTER (WHERE diseases.name IS NOT NULL) as diseases,
  json_agg(distinct jsonb_build_object('name', drugs.name, 'id', drugs.id, 'total', drug_count.total))  FILTER (WHERE drugs.name IS NOT NULL) as drugs,
  COUNT(DISTINCT(assertions.id)) as assertion_count
FROM molecular_profiles outer_mps
INNER JOIN evidence_items ON evidence_items.molecular_profile_id = outer_mps.id
INNER JOIN molecular_profiles_variants ON outer_mps.id = molecular_profiles_variants.molecular_profile_id
INNER JOIN variants ON molecular_profiles_variants.variant_id = variants.id
INNER JOIN genes ON genes.id = variants.gene_id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
LEFT OUTER JOIN assertions ON assertions.molecular_profile_id = outer_mps.id
LEFT OUTER JOIN molecular_profile_aliases_molecular_profiles ON molecular_profile_aliases_molecular_profiles.molecular_profile_id = outer_mps.id
LEFT OUTER JOIN molecular_profile_aliases ON molecular_profile_aliases.id = molecular_profile_aliases_molecular_profiles.molecular_profile_alias_id
-- this count is used for sorting drugs by the number of eids they appear with
LEFT JOIN LATERAL (SELECT drugs.id as drug_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
  INNER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
  WHERE evidence_items.variant_id = variants.id
  GROUP BY drugs.id
) drug_count on drugs.id = drug_count.drug_id

LEFT JOIN LATERAL (SELECT diseases.id as disease_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN diseases ON diseases.id = evidence_items.disease_id
  WHERE evidence_items.variant_id = variants.id
  GROUP BY diseases.id
) disease_count on diseases.id = disease_count.disease_id
WHERE evidence_items.status != 'rejected' 
GROUP BY outer_mps.id, outer_mps.name, genes.id, genes.name

