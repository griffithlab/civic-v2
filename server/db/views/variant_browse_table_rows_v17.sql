SELECT outer_variants.id,
  outer_variants.name,
  outer_variants.deprecated,
  outer_variants.flagged,
  features.id as feature_id,
  features.name as feature_name,
  features.deprecated as feature_deprecated,
  features.flagged as feature_flagged,
  array_agg(distinct(variant_aliases.name) order by variant_aliases.name) as alias_names,
  array_agg(DISTINCT(variant_types.id)) as variant_type_ids,
  json_agg(distinct jsonb_build_object('name', variant_types.display_name, 'id', variant_types.id)) FILTER (where variant_types IS NOT NULL) as variant_types,
  COUNT(DISTINCT(variant_types.id)) as variant_type_count,
  COUNT(DISTINCT(evidence_items.id)) FILTER (WHERE evidence_items.id IS NOT NULL) as evidence_item_count,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id, 'deprecated', diseases.deprecated, 'total', disease_count.total))  FILTER (WHERE diseases.name IS NOT NULL) as diseases,
  json_agg(distinct jsonb_build_object('name', therapies.name, 'id', therapies.id, 'deprecated', therapies.deprecated, 'total', therapy_count.total))  FILTER (WHERE therapies.name IS NOT NULL) as therapies,
  COUNT(DISTINCT(assertions.id)) as assertion_count
FROM variants outer_variants
LEFT OUTER JOIN variant_aliases_variants ON variant_aliases_variants.variant_id = outer_variants.id
LEFT OUTER JOIN variant_aliases ON variant_aliases.id = variant_aliases_variants.variant_alias_id
INNER JOIN molecular_profiles_variants on molecular_profiles_variants.variant_id = outer_variants.id
INNER JOIN molecular_profiles on molecular_profiles.id = molecular_profiles_variants.molecular_profile_id
LEFT OUTER JOIN evidence_items ON evidence_items.molecular_profile_id = molecular_profiles.id
INNER JOIN features ON features.id = outer_variants.feature_id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
LEFT OUTER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
LEFT OUTER JOIN assertions ON assertions.molecular_profile_id = molecular_profiles.id
LEFT OUTER JOIN variant_types_variants ON variant_types_variants.variant_id = outer_variants.id
LEFT OUTER JOIN variant_types ON variant_types_variants.variant_type_id = variant_types.id
LEFT JOIN LATERAL (SELECT therapies.id as therapy_id, COUNT(DISTINCT(evidence_items.id)) FILTER (WHERE evidence_items.id IS NOT NULL) as total
  FROM evidence_items
  INNER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
  INNER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
  INNER JOIN molecular_profiles on molecular_profiles.id = evidence_items.molecular_profile_id
  INNER JOIN molecular_profiles_variants on molecular_profiles_variants.molecular_profile_id = molecular_profiles.id
  WHERE molecular_profiles_variants.variant_id = outer_variants.id
  GROUP BY therapies.id
) therapy_count on therapies.id = therapy_count.therapy_id

LEFT JOIN LATERAL (SELECT diseases.id as disease_id, COUNT(DISTINCT(evidence_items.id)) FILTER (WHERE evidence_items.id IS NOT NULL) as total
  FROM evidence_items
  INNER JOIN diseases ON diseases.id = evidence_items.disease_id
  INNER JOIN molecular_profiles on molecular_profiles.id = evidence_items.molecular_profile_id
  INNER JOIN molecular_profiles_variants on molecular_profiles_variants.molecular_profile_id = molecular_profiles.id
  WHERE molecular_profiles_variants.variant_id = outer_variants.id
  GROUP BY diseases.id
) disease_count on diseases.id = disease_count.disease_id
WHERE (evidence_items.status != 'rejected' OR evidence_items.status IS NULL)
AND outer_variants.deprecated = FALSE
GROUP BY outer_variants.id, outer_variants.name, features.id, features.name
