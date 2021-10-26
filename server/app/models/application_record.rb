class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def display_name
    name
  end
end
