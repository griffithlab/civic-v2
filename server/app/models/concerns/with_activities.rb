module WithActivities
  extend ActiveSupport::Concern

  included do
    class_name = self.to_s

    has_many :activities_linked_entities,
      ->() { where(entity_type: class_name) },
      foreign_key: :entity_id,
      class_name: "ActivityLinkedEntity"
    has_many :activities, through: :activities_linked_entities

    def self.has_activity(relation_name, activity_type:)
      class_name = self.to_s
      link_name = "#{relation_name}_link".to_sym
      has_one link_name,
        ->() { where(entity_type: class_name)
                .eager_load(:activity)
                .where(activities: { type:  Array(activity_type).map(&:to_s) })
                .order("activities.created_at desc")
              },
              foreign_key: :entity_id,
              class_name: "ActivityLinkedEntity"
      has_one relation_name, through: link_name, source: :activity
    end
  end
end
