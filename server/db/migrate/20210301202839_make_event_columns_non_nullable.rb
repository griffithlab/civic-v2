# TODO remove
class SuggestedChange < ActiveRecord::Base; end

class MakeEventColumnsNonNullable < ActiveRecord::Migration[6.1]
  def change
    Event.find_each do |e|
      begin
        next if e.unlinkable
        if e.subject.nil?
          e.unlinkable = true
        else
          case e.action
          when 'flagged', 'flag resolved'
            e.originating_object = Flag.find(e.state_params['flag']['id'])
          when 'commented'
            e.originating_object = Comment.find(e.state_params['comment']['id'])
          when 'change accepted', 'change rejected', 'change rejected'
            e.originating_object = SuggestedChange.find(e.state_params['suggested_change']['id'])
          else
            e.originating_object = e.subject
          end
        end
      rescue => err
        e.unlinkable = true
      ensure
        e.save
      end
    end

    change_column_null :events, :subject_id, false
    change_column_null :events, :subject_type, false
  end
end
