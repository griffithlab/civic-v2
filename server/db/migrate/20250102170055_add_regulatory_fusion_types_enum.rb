class AddRegulatoryFusionTypesEnum < ActiveRecord::Migration[7.1]
  def up
    create_enum :regulatory_fusion_types, Constants::REGULATORY_FUSION_TYPES.map(&:first)
    add_enum_value :fusion_partner_status, "regulatory"

    add_column :variant_types, :regulatory_fusion_type, :enum, enum_type: :regulatory_fusion_types, null: true
    add_column :fusions, :regulatory_fusion_type, :enum, enum_type: :regulatory_fusion_types, null: true
    add_index :variant_types, :regulatory_fusion_type

    Constants::REGULATORY_FUSION_TYPES.each do |(type, soid)|
      if soid.present?
        vt = VariantType.find_by!(soid: soid)
        vt.regulatory_fusion_type = type
        vt.save!
      end
    end
  end

  def down
    remove_column :variant_types, :regulatory_fusion_type
    remove_column :fusions, :regulatory_fusion_type
    execute <<-SQL
      DROP TYPE regulatory_fusion_types;
    SQL
  end
end
