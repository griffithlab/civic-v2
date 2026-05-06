SELECT sources.id,
  sources.source_type,
  sources.citation_id,
  array_agg(DISTINCT(CONCAT(authors.last_name, ', ', authors.fore_name))) FILTER (WHERE authors.fore_name != '' OR authors.last_name != '') as authors,
  sources.publication_year,
  sources.asco_presenter,
  sources.journal,
  sources.title,
  sources.citation,
  sources.open_access,
  sources.retraction_nature,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  COUNT(DISTINCT(source_suggestions.id)) as source_suggestion_count
FROM sources
LEFT OUTER JOIN authors_sources on sources.id = authors_sources.source_id
LEFT OUTER JOIN authors on authors.id = authors_sources.author_id
LEFT OUTER JOIN evidence_items on evidence_items.source_id = sources.id
LEFT OUTER JOIN source_suggestions on source_suggestions.source_id = sources.id
GROUP BY sources.id, sources.source_type, sources.publication_year, sources.journal, sources.title;
