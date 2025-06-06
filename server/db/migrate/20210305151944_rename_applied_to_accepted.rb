# TODO remove
class SuggestedChange < ActiveRecord::Base; end

class RenameAppliedToAccepted < ActiveRecord::Migration[6.1]
  def up
    SuggestedChange.where(status: 'applied').find_each do |sc|
      sc.status = 'accepted'
      sc.save
    end
  end

  def down
    SuggestedChange.where(status: 'accepted').find_each do |sc|
      sc.status = 'applied'
      sc.save
    end
  end
end
