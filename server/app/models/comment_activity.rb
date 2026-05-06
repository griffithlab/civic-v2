class CommentActivity < Activity
  has_one_linked :comment

  def generate_verbiage
    "commented on"
  end
end
