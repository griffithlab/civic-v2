module Types::Entities
  class OrganizationType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :url, String, null: false
    field :description, String, null: false
    field :events, Types::Entities::EventType.connection_type, null: false
    field :sub_groups, [Types::Entities::OrganizationType], null: false
    field :org_stats_hash, Types::StatsType, null: false
    field :org_and_suborgs_stats_hash, Types::StatsType, null: false
    field :members, Types::Entities::UserType.connection_type, null: false
    field :most_recent_event, Types::Entities::EventType, null: true
    field :member_count, Int, null: false
    field :event_count, Int, null: false

    profile_image_sizes = [256, 128, 64, 32, 18, 12]
    field :profile_image_path, String, null: true do
      argument :size, Int, required: false, default_value: 56,
        validates: {
          inclusion: {
            in: profile_image_sizes,
            message: "Size must be one of [#{profile_image_sizes.join(',')}]"
          }
        }
    end

    def events
      Loaders::AssociationLoader.for(Organization, :events).load(object)
    end

    def sub_groups
      Loaders::AssociationLoader.for(Organization, :groups).load(object)
    end

    def members
      Loaders::AssociationLoader.for(Organization, :users).load(object)
    end

    def profile_image_path(size: )
      if object.profile_image.attached?
        object.profile_image.variant(resize_to_limit: [size, size]).processed.url
      else
        nil
      end
    end

    def member_count
      Loaders::CountLoader.for(Organization, association: :users).load(object.id)
    end

    def event_count
      Loaders::CountLoader.for(Organization, association: :events).load(object.id)
    end
  end
end
