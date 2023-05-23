class FlagEntityActivity < Activity

  has_linked :flag
  has_linked :comment

  de flaggable
    self.subject
  end

  def generate_verbiage
    'flagged'
  end
end
