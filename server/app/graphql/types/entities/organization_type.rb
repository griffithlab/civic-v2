module Types::Entities
  class OrganizationType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :url, String, null: false
    field :description, String, null: false
    field :events, Types::Entities::EventType.connection_type, null: false
    field :sub_groups, [ Types::Entities::OrganizationType ], null: false
    field :org_stats_hash, Types::StatsType, null: false
    field :org_and_suborgs_stats_hash, Types::StatsType, null: false
    field :members, Types::Entities::UserType.connection_type, null: false
    field :most_recent_activity_timestamp, GraphQL::Types::ISO8601DateTime, null: true
    field :member_count, Int, null: false
    field :event_count, Int, null: false
    field :ranks, Types::Entities::RanksType, null: false
    field :can_approve, Boolean, null: false
    field :has_approving_subgroups, Boolean, null: false
    field :is_approved_vcep, Boolean, null: false

    profile_image_sizes = [ 256, 128, 64, 32, 18, 12 ]
    field :profile_image_path, String, null: true do
      argument :size, Int, required: false, default_value: 56,
        validates: {
          inclusion: {
            in: profile_image_sizes,
            message: "Size must be one of [#{profile_image_sizes.join(',')}]",
          },
        }
    end

    def events
      Loaders::AssociationLoader.for(Organization, :events).load(object)
    end

    def sub_groups
      Loaders::AssociationLoader.for(Organization, :groups).load(object)
    end

    def has_approving_subgroups
      Loaders::AssociationLoader.for(Organization, :groups).load(object).then do |orgs|
        orgs.map(&:can_approve).any?
      end
    end

    def members
      Loaders::AssociationLoader.for(Organization, :users).load(object)
    end

    def profile_image_path(size:)
      Loaders::ActiveStorageLoader.for(:Organization, :profile_image).load(object.id).then do |image|
        if image
          Rails.application.routes.url_helpers.url_for(
            image.variant(resize_to_limit: [ size, size ]).processed.url
          )
        else
          nil
        end
      end
    end

    def member_count
      Loaders::AssociationCountLoader.for(Organization, association: :users).load(object.id)
    end

    def event_count
      Loaders::AssociationCountLoader.for(Organization, association: :events).load(object.id)
    end

    def ranks
      {
        moderation_rank: Leaderboard.single_organization_query(object.id, Leaderboard.moderation_actions),
        comments_rank: Leaderboard.single_organization_query(object.id, Leaderboard.comment_actions),
        submissions_rank: Leaderboard.single_organization_query(object.id, Leaderboard.submission_actions),
        revisions_rank: Leaderboard.single_organization_query(object.id, Leaderboard.revision_actions),
      }
    end
  end
end
