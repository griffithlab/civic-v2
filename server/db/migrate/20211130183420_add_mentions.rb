class AddMentions < ActiveRecord::Migration[6.1]
  def change
    create_table :role_mentions do |t|
      t.integer :role, null: false
      t.timestamps
    end

    add_reference :role_mentions, :comment, foreign_key: true

    create_table :user_mentions do |t|
      t.timestamps
    end

    add_reference :user_mentions, :user, foreign_key: true
    add_reference :user_mentions, :comment, foreign_key: true

    create_table :entity_mentions do |t|
      t.timestamps
    end

    add_reference :entity_mentions, :entity, polymorphic: true
    add_reference :entity_mentions, :comment, foreign_key: true
  end
end
