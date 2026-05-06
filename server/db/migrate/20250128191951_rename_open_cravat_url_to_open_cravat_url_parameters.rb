class RenameOpenCravatUrlToOpenCravatUrlParameters < ActiveRecord::Migration[7.1]
  def change
    rename_column :variants, :open_cravat_url, :open_cravat_url_parameters
  end
end
