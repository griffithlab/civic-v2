class RemovePaperClipColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :profile_image_file_name
    remove_column :users, :profile_image_content_type
    remove_column :users, :profile_image_file_size
    remove_column :users, :profile_image_updated_at
    remove_column :organizations, :profile_image_file_name
    remove_column :organizations, :profile_image_content_type
    remove_column :organizations, :profile_image_file_size
    remove_column :organizations, :profile_image_updated_at
  end
end
