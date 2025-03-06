class Leaderboard
  def self.organization_base_query(*actions)
    Organization.joins(users: [ :events ])
        .where("events.action" => actions)
        .where.not("users.id" => Constants::CIVICBOT_USER_ID)
        .group("organizations.id")
        .select('
                organizations.*,
                COUNT(DISTINCT(events.id)) as action_count,
                RANK() OVER (ORDER BY COUNT(DISTINCT(events.id)) DESC) rank
               ')
        .order("action_count DESC")
  end

  def self.user_base_query(*actions)
     User.joins(:events)
        .where("events.action" => actions)
        .where.not("users.id" => Constants::CIVICBOT_USER_ID)
        .group("users.id")
        .select('
                users.*,
                COUNT(DISTINCT(events.id)) as action_count,
                RANK() OVER (ORDER BY COUNT(DISTINCT(events.id)) DESC) rank
                ')
        .order("action_count DESC")
  end

  def self.single_user_query(user_id, actions)
    User.select("ranked_users.rank, ranked_users.action_count")
      .where("ranked_users.id" => user_id)
      .from(user_base_query(actions), :ranked_users)
      .limit(1)
      .to_a
      .at(0)
  end

  def self.single_organization_query(org_id, actions)
    Organization.select("ranked_orgs.rank, ranked_orgs.action_count")
      .where("ranked_orgs.id" => org_id)
      .from(organization_base_query(actions), :ranked_orgs)
      .limit(1)
      .to_a
      .at(0)
  end

  def self.comment_actions
    [
      "commented",
    ]
  end

  def self.moderation_actions
    [
      "revision accepted",
      "revision rejected",
      "accepted",
      "rejected",
      "assertion accepted",
      "assertion rejected",
    ]
  end

  def self.revision_actions
    [
      "revision suggested",
    ]
  end

  def self.submission_actions
    [
    "submitted",
    "assertion submitted",
    ]
  end
end
