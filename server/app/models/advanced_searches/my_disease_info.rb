module AdvancedSearches
  class MyDiseaseInfo < AdvancedSearches::Base
    def base_query
      ::MyDiseaseInfo
    end

    def resolve_search_fields(node)
      [
        resolve_disease_ontology_exact_synonyms_filter(node),
        resolve_disease_ontology_related_synonyms_filter(node),
        resolve_do_def_filter(node),
        resolve_do_def_citations_filter(node),
        resolve_icd10_filter(node),
        resolve_icdo_filter(node),
        resolve_mesh_filter(node),
        resolve_mono_def_filter(node),
        resolve_mono_id_filter(node),
        resolve_ncit_filter(node),
        resolve_omim_filter(node)
      ]
    end

    def resolve_disease_ontology_exact_synonyms_filter(node)
      return nil if node.disease_ontology_exact_synonyms.nil?
      clause, value = node.disease_ontology_exact_synonyms.resolve_query_for_type("my_disease_infos.disease_ontology_exact_synonyms")
      base_query.where(clause, value)
    end

    def resolve_disease_ontology_related_synonyms_filter(node)
      return nil if node.disease_ontology_related_synonyms.nil?
      clause, value = node.disease_ontology_related_synonyms.resolve_query_for_type("my_disease_infos.disease_ontology_related_synonyms")
      base_query.where(clause, value)
    end

    def resolve_do_def_filter(node)
      return nil if node.do_def.nil?
      clause, value = node.do_def.resolve_query_for_type("my_disease_infos.do_def")
      base_query.where(clause, value)
    end

    def resolve_do_def_citations_filter(node)
      return nil if node.do_def_citations.nil?
      clause, value = node.do_def_citations.resolve_query_for_type("my_disease_infos.do_def_citations")
      base_query.where(clause, value)
    end

    def resolve_icd10_filter(node)
      return nil if node.icd10.nil?
      clause, value = node.icd10.resolve_query_for_type("my_disease_infos.icd10")
      base_query.where(clause, value)
    end

    def resolve_icdo_filter(node)
      return nil if node.icdo.nil?
      clause, value = node.icdo.resolve_query_for_type("my_disease_infos.icdo")
      base_query.where(clause, value)
    end

    def resolve_mesh_filter(node)
      return nil if node.mesh.nil?
      clause, value = node.mesh.resolve_query_for_type("my_disease_infos.mesh")
      base_query.where(clause, value)
    end

    def resolve_mono_def_filter(node)
      return nil if node.mono_def.nil?
      clause, value = node.mono_def.resolve_query_for_type("my_disease_infos.mono_def")
      base_query.where(clause, value)
    end

    def resolve_mono_id_filter(node)
      return nil if node.mono_id.nil?
      clause, value = node.mono_id.resolve_query_for_type("my_disease_infos.mono_id")
      base_query.where(clause, value)
    end

    def resolve_ncit_filter(node)
      return nil if node.ncit.nil?
      clause, value = node.ncit.resolve_query_for_type("my_disease_infos.ncit")
      base_query.where(clause, value)
    end

    def resolve_omim_filter(node)
      return nil if node.omim.nil?
      clause, value = node.omim.resolve_query_for_type("my_disease_infos.omim")
      base_query.where(clause, value)
    end
  end
end
