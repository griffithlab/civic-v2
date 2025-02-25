class BackfillAsh < ActiveRecord::Migration[6.1]
  def up
    Source.where(source_type: 'ASH', abstract: nil).find_each do |s|
      Scrapers::Ash.populate_source_fields(s)
    end
  end

  def down
    # no op
  end
end
