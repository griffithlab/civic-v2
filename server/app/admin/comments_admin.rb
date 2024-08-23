Trestle.resource(:comments) do
  #exclude comments that were unable to be ported in the revisions backfill
  collection do
    Comment.where.not(commentable_type: 'SuggestedChange')
  end

  menu do
    item :comments, icon: "fa fa-comment"
  end

  remove_action :destroy
  remove_action :new

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :title
    column :comment
    column :commentable
    column :user
  end

  # Customize the form fields shown on the new/edit views.
  form do |comment|
    row do
      col(sm: 2) { static_field :id }
      col(sm: 5) do
        static_field :commentable do
          "#{comment.commentable.class} #{comment.commentable.id}"
        end
      end
      col(sm: 5) do
        static_field :user do
          link_to comment.user.username, UsersAdmin.instance_path(comment.user)
        end
      end
    end

    text_field :title
    text_area :comment

    divider

    row do
      col { datetime_field :created_at, readonly: true }
      col { datetime_field :updated_at, readonly: true }
    end
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:comment).permit(:name, ...)
  # end
end
