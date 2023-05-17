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
end
