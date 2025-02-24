class RoleMention < ApplicationRecord
  belongs_to :comment
  enum :role, ['curator', 'editor', 'admin']
end
