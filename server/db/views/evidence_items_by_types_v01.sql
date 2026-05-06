SELECT
  mp.id AS molecular_profile_id,
  SUM(CASE WHEN ei.evidence_type = 0 THEN 1 ELSE 0 END) AS diagnostic_count,
  SUM(CASE WHEN ei.evidence_type = 1 THEN 1 ELSE 0 END) AS prognostic_count,
  SUM(CASE WHEN ei.evidence_type = 2 THEN 1 ELSE 0 END) AS predictive_count,
  SUM(CASE WHEN ei.evidence_type = 3 THEN 1 ELSE 0 END) AS predisposing_count,
  SUM(CASE WHEN ei.evidence_type = 4 THEN 1 ELSE 0 END) AS functional_count,
  SUM(CASE WHEN ei.evidence_type = 5 THEN 1 ELSE 0 END) AS oncogenic_count
FROM molecular_profiles mp
INNER JOIN evidence_items ei ON mp.id = ei.molecular_profile_id AND ei.deleted = 'f' AND ei.status != 'rejected'
GROUP BY mp.id;
