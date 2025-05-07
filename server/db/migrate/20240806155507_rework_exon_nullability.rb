class ReworkExonNullability < ActiveRecord::Migration[7.1]
  def up
    create_enum :exon_coordinate_record_state, [ "stub", "exons_provided", "fully_curated" ]
    create_enum :variant_coordinate_record_state, [ "stub", "fully_curated" ]

    change_column_null :exon_coordinates, :chromosome, true
    change_column_null :exon_coordinates, :strand, true
    change_column_null :exon_coordinates, :ensembl_id, true
    change_column_null :exon_coordinates, :start, true
    change_column_null :exon_coordinates, :stop, true
    change_column_null :exon_coordinates, :exon, true
    change_column_null :exon_coordinates, :ensembl_version, true
    change_column_null :exon_coordinates, :representative_transcript, true
    change_column_null :exon_coordinates, :reference_build, true

    change_column_null :variant_coordinates, :variant_id, false

    change_table :exon_coordinates do |t|
      t.enum :record_state, enum_type: "exon_coordinate_record_state", null: false, default: "stub"
    end

    change_table :variant_coordinates do |t|
      t.enum :record_state, enum_type: "variant_coordinate_record_state", null: false, default: "stub"
    end
  end

  def down
    remove_column :exon_coordinates, :record_state
    remove_column :variant_coordinates, :record_state

    execute <<-SQL
      DROP TYPE exon_coordinate_record_state;
      DROP TYPE variant_coordinate_record_state;
    SQL

    change_column_null :exon_coordinates, :chromosome, false
    change_column_null :exon_coordinates, :strand, false
    change_column_null :exon_coordinates, :ensembl_id, false
    change_column_null :exon_coordinates, :start, false
    change_column_null :exon_coordinates, :stop, false
    change_column_null :exon_coordinates, :exon, false
    change_column_null :exon_coordinates, :ensembl_version, false
    change_column_null :exon_coordinates, :representative_transcript, false
    change_column_null :exon_coordinates, :reference_build, false

    change_column_null :variant_coordinates, :variant_id, true
  end
end
