class AddDeprecationCommentToVariant < ActiveRecord::Migration[6.1]
  def change
    add_column :variants, :deprecation_comment_id, :integer, null: true
    add_foreign_key :variants, :comments, column: :deprecation_comment_id
  end
end
