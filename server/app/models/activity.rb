class Activity < ApplicationRecord
  belongs_to :subject, polymorphic: true
  belongs_to :user
  belongs_to :organization, required: false


  has_many :activity_linked_entities
  has_many :linked_entities, through: :activity_linked_entities, source: :entity
  has_many :events


  def generate_verbiage
    raise NotImplementedError.new('Subclass must implement generate_verbiage for type')
  end

  def link_entities!(entities)
    Array(entities).each do |e|
      ActivityLinkedEntity.where(activity: self, entity: e).first_or_create!
    end
  end

  private
  def self.has_linked(entity_type)
    class_name = entity_type.to_s.classify
    link_name = "#{entity_type}_link".to_sym
    entity_relation_name = "linked_#{entity_type}".to_sym

    has_one link_name,
      ->() { where(entity_type: class_name) },
      foreign_key: :activity_id,
      class_name: 'ActivityLinkedEntity'

    has_one entity_relation_name,
      through: link_name,
      source: :entity,
      source_type: class_name

    define_method entity_type do
      if activity_linked_entities.loaded?
        activity_linked_entities.find { |e| e.entity_type == class_name }.entity
      else
        self.send(entity_relation_name)
      end
    end
  end
end
