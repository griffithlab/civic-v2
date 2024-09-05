class DeleteCommentActivity < Activity
  has_one_linked :comment

  def generate_verbiage
    'deleted'
  end
end
