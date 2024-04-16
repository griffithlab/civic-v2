module Types
  class TimePointCounts < Types::BaseObject
    field :new_this_week, Int, null: false
    field :new_this_month, Int, null: false
    field :new_this_year, Int, null: false
    field :all_time, Int, null: false
  end

  class CivicTimepointStats < Types::BaseObject
    description 'Counts of CIViC activity over time, used for the homepage'
    field :features, TimePointCounts, null: false
    field :variants, TimePointCounts, null: false
    field :molecular_profiles, TimePointCounts, null: false
    field :revisions, TimePointCounts, null: false
    field :evidence_items, TimePointCounts, null: false
    field :comments, TimePointCounts, null: false
    field :therapies, TimePointCounts, null: false
    field :diseases, TimePointCounts, null: false
    field :sources, TimePointCounts, null: false
    field :users, TimePointCounts, null: false
    field :assertions, TimePointCounts, null: false
  end
end
