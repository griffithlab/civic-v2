class ProposeEidRevisions < ActiveRecord::Migration[6.1]
  def up
    civicbot = User.find(Constants::CIVICBOT_USER_ID)
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
