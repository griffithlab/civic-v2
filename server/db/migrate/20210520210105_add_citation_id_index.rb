class AddCitationIdIndex < ActiveRecord::Migration[6.1]
  def change
    add_index :sources, :citation_id
  end
end
