class CreateLinkedSourceActivity < Activity
  has_one_linked :source_link

  def source
    self.subject
  end

  def generate_verbiage
    "linked sources"
  end
end
