SELECT outer_mps.id,
  outer_mps.name,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  array_agg(distinct(molecular_profile_aliases.name) order by molecular_profile_aliases.name) as alias_names,
  json_agg(distinct jsonb_build_object('name', features.name, 'id', features.id))  FILTER (WHERE features.name IS NOT NULL) as features,
  json_agg(distinct jsonb_build_object('name', variants.name, 'id', variants.id))  FILTER (WHERE variants.name IS NOT NULL) as variants,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total))  FILTER (WHERE diseases.name IS NOT NULL) as diseases,
  json_agg(distinct jsonb_build_object('name', therapies.name, 'id', therapies.id, 'total', therapy_count.total))  FILTER (WHERE therapies.name IS NOT NULL) as therapies,
  COUNT(DISTINCT(assertions.id)) as assertion_count,
  COUNT(DISTINCT(variants.id)) as variant_count,
  outer_mps.evidence_score
FROM molecular_profiles outer_mps
LEFT OUTER JOIN evidence_items ON evidence_items.molecular_profile_id = outer_mps.id
INNER JOIN molecular_profiles_variants ON outer_mps.id = molecular_profiles_variants.molecular_profile_id
INNER JOIN variants ON molecular_profiles_variants.variant_id = variants.id
INNER JOIN features ON features.id = variants.feature_id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
LEFT OUTER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
LEFT OUTER JOIN assertions ON assertions.molecular_profile_id = outer_mps.id
LEFT OUTER JOIN molecular_profile_aliases_molecular_profiles ON molecular_profile_aliases_molecular_profiles.molecular_profile_id = outer_mps.id
LEFT OUTER JOIN molecular_profile_aliases ON molecular_profile_aliases.id = molecular_profile_aliases_molecular_profiles.molecular_profile_alias_id
-- this count is used for sorting therapies by the number of eids they appear with
LEFT JOIN LATERAL (SELECT therapies.id as therapy_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
  INNER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
  WHERE evidence_items.molecular_profile_id = outer_mps.id
  GROUP BY therapies.id
) therapy_count on therapies.id = therapy_count.therapy_id

LEFT JOIN LATERAL (SELECT diseases.id as disease_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN diseases ON diseases.id = evidence_items.disease_id
  WHERE evidence_items.molecular_profile_id = outer_mps.id
  GROUP BY diseases.id
) disease_count on diseases.id = disease_count.disease_id
WHERE outer_mps.deprecated = False
GROUP BY outer_mps.id, outer_mps.name, outer_mps.evidence_score

