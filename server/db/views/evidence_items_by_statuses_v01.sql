SELECT
  mp.id AS molecular_profile_id,
  SUM(CASE WHEN ei.status = 'accepted' THEN 1 ELSE 0 END) AS accepted_count,
  SUM(CASE WHEN ei.status = 'rejected' THEN 1 ELSE 0 END) AS rejected_count,
  SUM(CASE WHEN ei.status = 'submitted' THEN 1 ELSE 0 END) AS submitted_count
FROM molecular_profiles mp
INNER JOIN evidence_items ei ON mp.id = ei.molecular_profile_id AND ei.deleted = 'f'
GROUP BY mp.id;
