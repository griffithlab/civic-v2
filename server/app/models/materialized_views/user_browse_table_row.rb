class MaterializedViews::UserBrowseTableRow < MaterializedViews::MaterializedView
  has_many :affiliations, primary_key: :id, foreign_key: :user_id
  has_many :organizations, through: :affiliations

  enum :role, ['curator', 'editor', 'admin']
end
