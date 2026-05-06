class AddFusions < ActiveRecord::Migration[7.1]
  def change
    create_enum :fusion_partner_status, [ "known", "unknown", "multiple" ]

    create_table :fusions do |t|
      t.references :five_prime_gene, null: true, index: true, foreign_key: { to_table: :genes }
      t.references :three_prime_gene, null: true, index: true, foreign_key: { to_table: :genes }
      t.enum :five_prime_partner_status, enum_type: "fusion_partner_status", default: "unknown", null: false
      t.enum :three_prime_partner_status, enum_type: "fusion_partner_status", default: "unknown", null: false
      t.timestamps
    end
  end
end
