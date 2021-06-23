module Types::BrowseTables
  class BrowseEvidenceType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :gene_name, String, null: false
    field :variant_name, String, null: false
    #TODO - in the future we likely want to make these actual Disease and Drug objects
    # rather than aggregating them in the view itself
    field :disease_name, String, null: false
    field :drug_names, [String], null: false
    field :evidence_direction, Types::EvidenceDirectionType, null: false
    field :evidence_level, Types::EvidenceLevelType, null: false
    field :evidence_rating, Int, null: true,
      validates: { inclusion: { in: [1, 2, 3, 4, 5], allow_blank: true } }
    field :evidence_type, Types::EvidenceTypeType, null: false
    field :status, Types::EvidenceStatusType, null: false
    field :variant_origin, Types::VariantOriginType, null: false
    #TODO- this should be non nullable but some eids are missing it
    field :clinical_significance, Types::EvidenceClinicalSignificanceType, null: true
    field :description, String, null: false

    def drug_names
      object.drug_names
        .compact
    end
  end
end