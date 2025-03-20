class AddClingenCodes < ActiveRecord::Migration[6.1]
  def change
    create_table :clingen_codes do |t|
      t.text :code
      t.text :description
    end
    add_index :clingen_codes, :code
    add_index :clingen_codes, :description

    create_join_table :assertions, :clingen_codes do |t|
      t.timestamps
    end
    add_index :assertions_clingen_codes, [ :clingen_code_id, :assertion_id ], name: 'idx_clingencodes_assertions'
    add_index :assertions_clingen_codes, :assertion_id
    add_foreign_key :assertions_clingen_codes, :clingen_codes
    add_foreign_key :assertions_clingen_codes, :assertions


    codes = [
      [ 'OVS1', 'Null variant in a tumor suppressor gene' ],
      [ 'OS1', 'Same amino acid change as a previously established oncogenic variant' ],
      [ 'OS2', 'In vitro or in vivo functional studies, supportive of an oncogenic effect' ],
      [ 'OS3', 'In cancerhotspots.org with at least 50 samples with same amino acid position, and the same amino acid change count in at least 10 samples.' ],
      [ 'OM1', 'Located in a critical and well-established part of a functional domain' ],
      [ 'OM2', 'In-frame deletions/insertions in a known oncogene or tumor suppressor or stop-loss in tumor suppressor' ],
      [ 'OM3', 'Missense variant at an amino acid residue where different missense variant determined oncogenic' ],
      [ 'OM4', 'In cancerhotspots.org with less than 50 samples with same amino acid position, and the same amino acid change count in at least 10 samples' ],
      [ 'OP1', 'computational evidence support an oncogenic effect of a variant' ],
      [ 'OP2', 'Somatic variant in a gene in a malignancy with a single genetic etiology.' ],
      [ 'OP3', 'Located in cancerhotspots.org and the amino acid change count is below 10' ],
      [ 'OP4', 'Absent from controls (or extremely low frequency) in gnomAD' ],
      [ 'SBVS1', 'Minor allele frequency is >5% in gnomAD in any of 5 of general populations' ],
      [ 'SBS1', 'Minor allele frequency is >1% in gnomAD in any of 5 of general populations' ],
      [ 'SBS2', 'In vitro or in vivo functional studies, supportive of no oncogenic effect' ],
      [ 'SBP1', 'computational evidence does not support an oncogenic effect of a variant' ],
      [ 'SBP2', 'A synonymous variant for which splicing prediction algorithms predict no effect' ],
    ]

    codes.each do |(code, desc)|
      ClingenCode.create!(code: code, description: desc)
    end
  end
end
