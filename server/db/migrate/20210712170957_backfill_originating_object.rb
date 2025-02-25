import 'pry'

class BackfillOriginatingObject < ActiveRecord::Migration[6.1]
  def up
    Event.where(originating_object: nil).each do |e|
      params = JSON.parse(e.state_params)
      subject_params = params[e.subject_type.underscore]
      if !subject_params.nil? && subject_params['id'] == e.subject_id
        if e.action == 'commented'
          if params.include? 'comment'
            comment_id = params['comment']['id']
            e.originating_object_type = 'Comment'
            e.originating_object_id = comment_id
            e.save
          end
        elsif [ 'flagged', 'flag resolved' ].include? e.action
          flag_id = params['flag']['id']
          e.originating_object_type = 'Flag'
          e.originating_object_id = flag_id
          e.save
        elsif [ 'revision suggested', 'revision rejected', 'revision accepted' ].include? e.action
          if params.include? 'suggested_change'
            revision_id = params['suggested_change']['id']
            e.originating_object_type = 'Revision'
            e.originating_object_id = revision_id
            e.save
          end
        elsif [ 'accepted', 'submitted', 'rejected', 'assertion accepted', 'assertion submitted', 'assertion rejected', 'publication suggested' ].include? e.action
          e.originating_object = e.subject
          e.save
        end
      end
    end
  end

  def down
  end
end
