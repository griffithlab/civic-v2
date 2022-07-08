 SELECT outer_genes.id,
  outer_genes.name,
  outer_genes.entrez_id,
  outer_genes.flagged,
  array_agg(distinct(gene_aliases.name) order by gene_aliases.name) as alias_names,
  json_agg(distinct jsonb_build_object('name', diseases.name, 'id', diseases.id, 'total', disease_count.total))  FILTER (WHERE diseases.name IS NOT NULL) as diseases,
  json_agg(distinct jsonb_build_object('name', drugs.name, 'id', drugs.id, 'total', drug_count.total))  FILTER (WHERE drugs.name IS NOT NULL) as drugs,
  count(distinct(variants.id)) as variant_count,
  count(distinct(evidence_items.id)) as evidence_item_count,
  count(distinct(assertions.id)) as assertion_count
FROM genes outer_genes
LEFT OUTER JOIN gene_aliases_genes ON gene_aliases_genes.gene_id = outer_genes.id
LEFT OUTER JOIN gene_aliases ON gene_aliases.id = gene_aliases_genes.gene_alias_id
INNER JOIN variants ON variants.gene_id = outer_genes.id
INNER JOIN evidence_items ON evidence_items.variant_id = variants.id
LEFT OUTER JOIN diseases ON diseases.id = evidence_items.disease_id
LEFT OUTER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
LEFT OUTER JOIN assertions on assertions.gene_id = outer_genes.id
LEFT JOIN LATERAL (SELECT drugs.id as drug_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN variants ON variants.id = evidence_items.variant_id
  INNER JOIN drugs_evidence_items ON drugs_evidence_items.evidence_item_id = evidence_items.id
  INNER JOIN drugs ON drugs.id = drugs_evidence_items.drug_id
  WHERE variants.gene_id = outer_genes.id
  GROUP BY drugs.id
) drug_count on drugs.id = drug_count.drug_id

LEFT JOIN LATERAL (SELECT diseases.id as disease_id, COUNT(DISTINCT(evidence_items.id)) as total
  FROM evidence_items
  INNER JOIN variants ON variants.id = evidence_items.variant_id
  INNER JOIN diseases ON diseases.id = evidence_items.disease_id
  WHERE variants.gene_id = outer_genes.id
  GROUP BY diseases.id
) disease_count on diseases.id = disease_count.disease_id
WHERE evidence_items.status != 'rejected'
GROUP BY outer_genes.id, outer_genes.name, outer_genes.entrez_id;

