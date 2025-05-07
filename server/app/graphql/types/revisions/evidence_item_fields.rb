module Types::Revisions
  class EvidenceItemFields < Types::BaseInputObject
    description "Fields on an EvidenceItem that curators may propose revisions to."
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The Evidence Items's description/summary text."
    argument :molecular_profile_id, Int, required: true,
      description: "The ID of the Molecular Profile to which this EvidenceItem belongs"
    argument :variant_origin, Types::VariantOriginType, required: true,
      description: "The Variant Origin for this EvidenceItem."
    argument :source_id, Int, required: true,
      description: "The ID of the Source from which this EvidenceItem was curated."
    argument :evidence_type, Types::EvidenceTypeType, required: true,
      description: "The Type of the EvidenceItem"
    argument :significance, Types::EvidenceSignificanceType, required: true,
      description: "The Clinical Significance of the EvidenceItem"
    argument :disease_id, Types::NullableValueInputType.for(GraphQL::Types::Int), required: true,
      description: "The ID of the disease (if applicable) for this EvidenceItem"
    argument :evidence_level, Types::EvidenceLevelType, required: true,
      description: "The evidence level of the EvidenceItem"
    argument :evidence_direction, Types::EvidenceDirectionType, required: true,
      description: "The evidence direction for this EvidenceItem."
    argument :phenotype_ids, [ Int ], required: true,
      description: "List of IDs of CIViC Phenotype entries for this EvidenceItem. An empty list indicates none."
    argument :rating, Int, required: true,
      description: "The rating for this EvidenceItem",
      validates: { inclusion: { in: [ 1, 2, 3, 4, 5 ], allow_blank: false } }
    argument :therapy_ids, [ Int ], required: true,
      description: "List of IDs of CIViC Therapy entries for this EvidenceItem. An empty list indicates none."
    argument :therapy_interaction_type, Types::NullableValueInputType.for(Types::TherapyInteractionType), required: true,
      description: "Therapy interaction type for cases where more than one Therapy ID is provided."
  end
end
