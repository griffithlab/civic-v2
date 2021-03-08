module ModeratedField
  extend ActiveSupport::Concern

  included do
    def display_name
      name
    end

    def display_type
      self.class
    end
  end
end
