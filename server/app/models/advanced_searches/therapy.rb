module AdvancedSearches
  class Therapy < AdvancedSearches::Base
    def base_query
      ::Therapy.left_outer_joins(:therapy_aliases)
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_deprecated_filter(node),
        # resolve_link_filter(node), # Link requires some different logic to return
        resolve_ncit_id_filter(node),
        resolve_therapy_aliases_filter(node),
        # resolve_therapy_url_filter(node), # Same issue as link, maybe even would be pointing to the same data, not sure
        # resolve_my_chem_info_filter(node), # Same issue as my_disease_info in disease.rb. Undefined method 'where' for class MyChemInfo
      ]
    end

    def resolve_id_filter(node)
      return nil if node.id.nil?
      clause, value = node.id.resolve_query_for_type("therapies.id")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("therapies.name")
      base_query.where(clause, value)
    end

    def resolve_deprecated_filter(node)
      return nil if node.deprecated.nil?
      clause, value = node.deprecated.resolve_query_for_type("therapies.deprecated")
      base_query.where(clause, value)
    end

    def resolve_link_filter(node)
      return nil if node.link.nil?
      clause, value = node.link.resolve_query_for_type("therapies.link")
      base_query.where(clause, value)
    end

    def resolve_ncit_id_filter(node)
      return nil if node.ncit_id.nil?
      clause, value = node.ncit_id.resolve_query_for_type("therapies.ncit_id")
      base_query.where(clause, value)
    end

    def resolve_therapy_aliases_filter(node)
      return nil if node.therapy_aliases.nil?
      clause, value = node.therapy_aliases.resolve_query_for_type("therapy_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_therapy_url_filter(node)
      return nil if node.therapy_url.nil?
      clause, value = node.therapy_url.resolve_query_for_type("therapies.therapy_url")
      base_query.where(clause, value)
    end

    def resolve_my_chem_info_filter(node)
      return nil if node.my_chem_info.nil?

      my_chem_info_ids = ::AdvancedSearches::MyChemInfo.new(query: node.my_chem_info).results
      therapy_ids = ::Therapy.joins(:my_chem_info).where(my_chem_info: { id: my_chem_info_ids }).select(:id)
      base_query.where(id: therapy_ids)
    end
  end
end
