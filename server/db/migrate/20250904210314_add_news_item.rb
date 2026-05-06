class AddNewsItem < ActiveRecord::Migration[8.0]
  def change
    create_table :news_items do |t|
      t.timestamps
      t.datetime :published_at
      t.text :title, null: false
      t.boolean :published, null: false, default: false
    end
  end
end
