 SELECT outer_genes.id,
  outer_genes.name,
  outer_genes.entrez_id,
  outer_genes.flagged,
  array_agg(distinct(gene_aliases.name) order by gene_aliases.name) as alias_names,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total))  FILTER (WHERE diseases.name IS NOT NULL) as diseases,
  json_agg(distinct jsonb_build_object('name', therapies.name, 'id', therapies.id, 'total', therapy_count.total))  FILTER (WHERE therapies.name IS NOT NULL) as therapies,
  count(distinct(variants.id)) as variant_count,
  count(distinct(evidence_items.id)) as evidence_item_count,
  count(distinct(assertions.id)) as assertion_count,
  count(distinct(molecular_profiles.id)) as molecular_profile_count
FROM genes outer_genes
LEFT OUTER JOIN gene_aliases_genes ON gene_aliases_genes.gene_id = outer_genes.id
LEFT OUTER JOIN gene_aliases ON gene_aliases.id = gene_aliases_genes.gene_alias_id
INNER JOIN variants ON variants.gene_id = outer_genes.id
INNER JOIN molecular_profiles_variants ON molecular_profiles_variants.variant_id = variants.id
INNER JOIN molecular_profiles ON molecular_profiles.id = molecular_profiles_variants.molecular_profile_id
INNER JOIN evidence_items ON evidence_items.molecular_profile_id = molecular_profiles.id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
LEFT OUTER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
LEFT OUTER JOIN assertions on assertions.molecular_profile_id = molecular_profiles.id
LEFT JOIN LATERAL (SELECT therapies.id as therapy_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN molecular_profiles ON molecular_profiles.id = evidence_items.molecular_profile_id
  INNER JOIN molecular_profiles_variants ON molecular_profiles_variants.molecular_profile_id = molecular_profiles.id
  INNER JOIN variants ON variants.id = molecular_profiles_variants.variant_id
  INNER JOIN evidence_items_therapies ON evidence_items_therapies.evidence_item_id = evidence_items.id
  INNER JOIN therapies ON therapies.id = evidence_items_therapies.therapy_id
  WHERE variants.gene_id = outer_genes.id
  GROUP BY therapies.id
) therapy_count on therapies.id = therapy_count.therapy_id

LEFT JOIN LATERAL (SELECT diseases.id as disease_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN molecular_profiles ON molecular_profiles.id = evidence_items.molecular_profile_id
  INNER JOIN molecular_profiles_variants ON molecular_profiles_variants.molecular_profile_id = molecular_profiles.id
  INNER JOIN variants ON variants.id = molecular_profiles_variants.variant_id
  INNER JOIN diseases ON diseases.id = evidence_items.disease_id
  WHERE variants.gene_id = outer_genes.id
  GROUP BY diseases.id
) disease_count on diseases.id = disease_count.disease_id
WHERE evidence_items.status != 'rejected'
  AND molecular_profiles.deprecated = 'f'
  AND variants.deprecated = 'f'
GROUP BY outer_genes.id, outer_genes.name, outer_genes.entrez_id;

