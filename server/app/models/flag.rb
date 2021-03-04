class Flag < ActiveRecord::Base
  belongs_to :flaggable, polymorphic: true
  belongs_to :flagging_user, class_name: 'User'
  belongs_to :resolving_user, class_name: 'User', required: false

  validates :state, inclusion: ['open', 'resolved']

  #def self.index_scope
  #  includes(comments: [:user])
  #end

  def name
    "a flag on #{flaggable.name}"
  end

  #def self.resolve(user, flag, organization)
  #  cmd = Actions::ResolveFlag.new(user, flag, organization)
  #  cmd.perform
  #end
end
