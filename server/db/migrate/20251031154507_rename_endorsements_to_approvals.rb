class RenameEndorsementsToApprovals < ActiveRecord::Migration[8.0]
  def up
    # Rename enum type
    execute "ALTER TYPE endorsement_status RENAME TO approval_status"

    # Rename table
    rename_table :endorsements, :approvals

    # Rename column references in other tables
    rename_column :organizations, :can_endorse, :can_approve
    rename_column :affiliations, :can_endorse, :can_approve

    # Update activity types in the database
    execute <<-SQL
      UPDATE activities#{' '}
      SET type = 'ApproveAssertionActivity'#{' '}
      WHERE type = 'EndorseAssertionActivity';
    SQL

    execute <<-SQL
      UPDATE activities#{' '}
      SET type = 'RevokeApprovalActivity'#{' '}
      WHERE type = 'RevokeEndorsementActivity';
    SQL
  end

  def down
    # Reverse all changes
    execute "ALTER TYPE approval_status RENAME TO endorsement_status"
    rename_table :approvals, :endorsements
    rename_column :organizations, :can_approve, :can_endorse
    rename_column :affiliations, :can_approve, :can_endorse

    execute <<-SQL
      UPDATE activities#{' '}
      SET type = 'EndorseAssertionActivity'#{' '}
      WHERE type = 'ApproveAssertionActivity';
    SQL

    execute <<-SQL
      UPDATE activities#{' '}
      SET type = 'RevokeEndorsementActivity'#{' '}
      WHERE type = 'RevokeApprovalActivity';
    SQL
  end
end
