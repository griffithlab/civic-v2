SELECT therapies.id,
  therapies.name,
  therapies.deprecated,
  therapies.ncit_id,
  COUNT(DISTINCT(assertions.id)) as assertion_count,
  COUNT(DISTINCT(evidence_items.id)) as evidence_count,
  array_agg(distinct(therapy_aliases.name) order by therapy_aliases.name) as alias_names
FROM therapies
INNER JOIN evidence_items_therapies ON evidence_items_therapies.therapy_id = therapies.id
INNER JOIN evidence_items on evidence_items_therapies.evidence_item_id = evidence_items.id
LEFT OUTER JOIN assertions_evidence_items on assertions_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN assertions on assertions_evidence_items.assertion_id = assertions.id
LEFT OUTER JOIN therapies_therapy_aliases ON therapies_therapy_aliases.therapy_id = therapies.id
LEFT OUTER JOIN therapy_aliases ON therapy_aliases.id = therapies_therapy_aliases.therapy_alias_id
WHERE (evidence_items.status != 'rejected' OR assertions.status != 'rejected') 
AND deprecated = false
GROUP BY therapies.id, therapies.name, therapies.deprecated, therapies.ncit_id
HAVING (COUNT(evidence_items.id) > 0 OR COUNT(assertions.id) > 0)
ORDER BY evidence_count DESC, therapies.id ASC
