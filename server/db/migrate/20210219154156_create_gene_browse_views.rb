class CreateGeneBrowseViews < ActiveRecord::Migration[6.1]
  def change
    create_view :gene_browse_views
  end
end
