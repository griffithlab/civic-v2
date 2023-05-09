class CreateActivites < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.text :type, null: false, index: true
      t.references :user, null: false, index: true, foreign_key: true
      t.references :organization, null: true, index: true, foreign_key: true
      t.references :subject, null: false, polymorphic: true, index: true
      t.timestamps
    end

    create_table :activity_linked_entities do |t|
      t.references :entity, null: false, polymorphic: true, index: true
      t.references :activity, null: false, index: true
      t.timestamps
    end

    add_column :events, :activity_id, :integer, index: true
    add_foreign_key :events, :activities
  end
end
