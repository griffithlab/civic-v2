class SuggestSourceActivity < Activity
  has_one_linked :source_suggestion

  def source
    self.subject
  end

  def generate_verbiage
    "suggested"
  end
end
