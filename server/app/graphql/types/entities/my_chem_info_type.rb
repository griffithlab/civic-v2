module Types::Entities
  class FdaCode < Types::BaseObject
    field :code, String, null: false
    field :description, String, null: false
  end

  class MyChemInfoType < Types::BaseObject
    field :chebi_id, String, null: true
    field :chebi_definition, String, null: true
    field :fda_epc_codes, [ FdaCode ], null: false
    field :fda_moa_codes, [ FdaCode ], null: false
    field :first_approval, String, null: true
    field :chembl_molecule_type, String, null: true
    field :chembl_id, String, null: true
    field :pubchem_cid, String, null: true
    field :pharmgkb_id, String, null: true
    field :rxnorm, String, null: true
    field :inchikey, String, null: true
    field :drugbank_id, String, null: true
    field :indications, [ String ], null: false
  end
end
