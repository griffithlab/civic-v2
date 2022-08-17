SELECT sources.id,
  sources.source_type,
  sources.citation_id,
  array_agg(DISTINCT(CONCAT(authors.last_name, ', ', authors.fore_name))) FILTER (WHERE authors.fore_name != '' OR authors.last_name != '') as authors,
  sources.publication_year,
  sources.journal,
  sources.title,
  sources.description,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  COUNT(DISTINCT(source_suggestions.id)) as source_suggestion_count
FROM sources
LEFT OUTER JOIN authors_sources on sources.id = authors_sources.source_id
LEFT OUTER JOIN authors on authors.id = authors_sources.author_id
LEFT OUTER JOIN evidence_items on evidence_items.source_id = sources.id
LEFT OUTER JOIN source_suggestions on source_suggestions.source_id = sources.id
WHERE (evidence_items.status != 'rejected' OR (source_suggestions.status = 'new' OR source_suggestions.status is NULL))
GROUP BY sources.id, sources.source_type, sources.publication_year, sources.journal, sources.title
HAVING COUNT(DISTINCT(evidence_items.id)) > 0 OR COUNT(DISTINCT(evidence_items.id)) > 0;
