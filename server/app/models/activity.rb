class Activity < ApplicationRecord
  belongs_to :subject, polymorphic: true
  belongs_to :user
  belongs_to :organization, required: false


  has_many :activity_linked_entities
  has_many :linked_entities, through: :activity_linked_entities, source: :entity
  has_many :events

  #validate :action_name

  def name
    raise NotImplementedError.new('Subclass must specifiy name for type')
  end

  def link_entities!(entities)
    Array(entities).each do |e|
      ActivityLinkedEntity.where(activity: self, entity: e).first_or_create!
    end
  end

  private
  def action_name
    unless Constants::ACTIVITY_NAMES.includes?(self.name)
      errors.add(:name, "#{self.name} is not a valid activity name")
    end
  end
end
