SELECT sources.id,
  sources.source_type,
  sources.citation_id,
  array_agg(DISTINCT(CONCAT(authors.last_name, ', ', authors.fore_name))) as authors,
  sources.publication_year,
  sources.journal,
  sources.title,
  sources.description,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count
FROM sources
LEFT OUTER JOIN authors_sources on sources.id = authors_sources.source_id
INNER JOIN authors on authors.id = authors_sources.author_id
LEFT OUTER JOIN evidence_items on evidence_items.source_id = sources.id
WHERE evidence_items.status != 'rejected'
GROUP BY sources.id, sources.source_type, sources.publication_year, sources.journal, sources.title;
