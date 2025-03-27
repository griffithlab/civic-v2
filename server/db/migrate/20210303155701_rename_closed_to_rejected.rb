# TODO remove
class SuggestedChange < ActiveRecord::Base; end

class RenameClosedToRejected < ActiveRecord::Migration[6.1]
  def up
    SuggestedChange.where(status: 'closed').find_each do |sc|
      sc.status = 'rejected'
      sc.save
    end
  end

  def down
    SuggestedChange.where(status: 'rejected').find_each do |sc|
      sc.status = 'closed'
      sc.save
    end
  end
end
