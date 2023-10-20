class RevisionSet < ApplicationRecord
  has_many :revisions

  def display_name
    "RSID#{id}"
  end

  def name
    "RSID#{id}"
  end
end
