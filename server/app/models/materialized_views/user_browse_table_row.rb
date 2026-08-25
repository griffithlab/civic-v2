class MaterializedViews::UserBrowseTableRow < MaterializedViews::MaterializedView
  has_many :affiliations, primary_key: :id, foreign_key: :user_id
  has_many :organizations, through: :affiliations
  has_many :organizations_with_approval_privileges,
    ->() { where("affiliations.can_approve = 't'") },
    through: :affiliations,
    source: :organization
  belongs_to :country

  enum :role, [ "curator", "editor", "admin" ]
end
