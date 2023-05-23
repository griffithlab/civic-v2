class CommentActivity < Activity
  has_linked :comment

  def generate_verbiage
    'commented on'
  end
end
