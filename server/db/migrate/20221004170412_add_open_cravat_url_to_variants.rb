class AddOpenCravatUrlToVariants < ActiveRecord::Migration[6.1]
  def change
    add_column :variants, :open_cravat_url, :text
  end
end
