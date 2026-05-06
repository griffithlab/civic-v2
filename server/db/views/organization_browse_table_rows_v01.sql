SELECT organizations.id,
  organizations.name,
  organizations.url,
  organizations.description,
  organizations.parent_id,
  organizations.created_at,
  organizations.updated_at,
  organizations.most_recent_activity_timestamp,
  COUNT(DISTINCT(activities.id)) as activity_count,
  COUNT(DISTINCT(affiliations.user_id)) as member_count,
  json_agg(distinct jsonb_build_object('child_id', child.id, 'child_name', child.name)) FILTER (WHERE child.id IS NOT NULL) as child_organizations
FROM organizations
LEFT OUTER JOIN activities on activities.organization_id = organizations.id
LEFT OUTER JOIN affiliations on affiliations.organization_id = organizations.id
LEFT OUTER JOIN organizations child on child.parent_id = organizations.id
GROUP BY organizations.id;