select variant_groups.id,
variant_groups.name,
array_agg(DISTINCT(variants.name)) as variant_names,
array_agg(DISTINCT(features.name)) as feature_names,
COUNT(DISTINCT(variants.id)) as variant_count,
COUNT(DISTINCT(evidence_items.id)) as evidence_item_count
FROM variant_groups
INNER JOIN variant_group_variants ON variant_group_variants.variant_group_id = variant_groups.id
INNER JOIN variants ON variant_group_variants.variant_id = variants.id
INNER JOIN features ON variants.feature_id = features.id
LEFT OUTER JOIN molecular_profiles_variants on molecular_profiles_variants.variant_id = variants.id
LEFT OUTER JOIN molecular_profiles on molecular_profiles.id = molecular_profiles_variants.molecular_profile_id
LEFT OUTER JOIN evidence_items on evidence_items.molecular_profile_id = molecular_profiles.id
WHERE evidence_items.status != 'rejected'
GROUP BY variant_groups.id, variant_groups.name
