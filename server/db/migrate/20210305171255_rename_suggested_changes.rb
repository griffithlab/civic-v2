
class RenameSuggestedChanges < ActiveRecord::Migration[6.1]
  def up
    Event.where(action: 'change suggested').find_each do |c|
      c.action = 'revision suggested'
      c.save!
    end
    Event.where(action: 'change accepted').find_each do |c|
      c.action = 'revision accepted'
      c.save!
    end
    Event.where(action: 'change rejected').find_each do |c|
      c.action = 'revision rejected'
      c.save!
    end
    rename_table :v2_suggested_changes, :revisions
  end

  def down
    Event.where(action: 'revision suggested').find_each do |c|
      c.action = 'change suggested'
      c.save!
    end
    Event.where(action: 'revision accepted').find_each do |c|
      c.action = 'change accepted'
      c.save!
    end
    Event.where(action: 'revision rejected').find_each do |c|
      c.action = 'change rejected'
      c.save!
    end
    rename_table :revisions, :v2_suggested_changes
  end
end
