class BackfillSourceSuggestionEvents < ActiveRecord::Migration[6.1]
  def up
    SourceSuggestion.all.each do |s|
      es = Event.where(action: 'publication suggested')
        .where(originating_user: s.user)
        .select { |e| (e.created_at - s.created_at).minute.abs <= 1 }
      if es.count == 1
        e = es.first
        e.originating_object = s
        e.save
      elsif es.count > 1
        binding.pry
      end
    end
  end
end
