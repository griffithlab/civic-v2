module AdvancedSearches
  class Disease < AdvancedSearches::Base
    def base_query
      ::Disease.left_outer_joins(:disease_aliases)
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_display_name_filter(node),
        resolve_doid_filter(node),
        # resolve_link_filter(node),
        resolve_deprecated_filter(node),
        resolve_disease_aliases_filter(node),
        # resolve_my_disease_info_filter(node), # Something has gone wrong with my_disease_info, not sure what but it just says undefined method where for class MyDiseaseInfo
      ]
    end

    def resolve_id_filter(node)
      if node.id.nil?
        return nil
      end
      clause, value = node.id.resolve_query_for_type("diseases.id")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      if node.name.nil?
        return nil
      end
      clause, value = node.name.resolve_query_for_type("diseases.name")
      base_query.where(clause, value)
    end

    def resolve_display_name_filter(node)
      if node.display_name.nil?
        return nil
      end
      clause, value = node.display_name.resolve_query_for_type("diseases.display_name")
      base_query.where(clause, value)
    end

    def resolve_doid_filter(node)
      if node.doid.nil?
        return nil
      end
      clause, value = node.doid.resolve_query_for_type("diseases.doid")
      base_query.where(clause, value)
    end

    # def resolve_link_filter(node)
    #   if node.link.nil?
    #     return nil
    #   end
    #   clause, value = node.link.resolve_query_for_type("diseases.link")
    #   base_query.where(clause, value)
    # end 

    def resolve_deprecated_filter(node)
      if node.deprecated.nil?
        return nil
      end
      clause, value = node.deprecated.resolve_query_for_type("diseases.deprecated")
      base_query.where(clause, value)
    end

    def resolve_disease_aliases_filter(node)
      if node.disease_aliases.nil?
        return nil
      end
      clause, value = node.disease_aliases.resolve_query_for_type("disease_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_my_disease_info_filter(node)
      if node.my_disease_info.nil?
        return nil
      end
      my_disease_ids = ::AdvancedSearches::MyDiseaseInfo.new(query: node.my_disease_info).results
      disease_ids = ::Disease.joins(:my_disease_info).where(my_disease_info: {id: my_disease_ids}).select(:id)
      base_query.where(id: disease_ids)
    end
  end
end
