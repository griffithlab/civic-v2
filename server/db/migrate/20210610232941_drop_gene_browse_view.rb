class DropGeneBrowseView < ActiveRecord::Migration[6.1]
  def change
    drop_view :gene_browse_views
  end
end
