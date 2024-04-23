class MergeAccounts < ActionWrapper

  def self.name
    "Merge User Accounts"
  end

  def self.description
    "Merge two user accounts, removing one and transferring the authorizations and events to the remaining one."
  end

  def self.inputs
    {
      account_id_to_keep: :int,
      account_id_to_merge_in: :int,
    }
  end

  def action_class
    Actions::MergeAccounts
  end
end
