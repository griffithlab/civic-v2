module Types::Entities
  class MyDiseaseInfoType < Types::BaseObject
    field :disease_ontology_exact_synonyms, [String], null: false
    field :disease_ontology_related_synonyms, [String], null: false
    field :mesh, String, null: true 
    field :icdo, String, null: true
    field :icd10, String, null: true
    field :ncit, [String], null: false
    field :omim, String, null: true
    field :do_def, String, null: true
    field :do_def_citations, [String], null: false
    field :mondo_def, String, null: true
    field :mondo_id, String, null: true
  end
end
