module AdvancedSearches
  class Source < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id

    def base_query
      ::Source
    end

    def table_name
      "sources"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_source_type_filter(node),
        resolve_citation_filter(node),
        resolve_citation_id_filter(node),
        resolve_journal_filter(node),
        resolve_abstract_filter(node),
        resolve_title_filter(node),
        resolve_is_retracted_filter(node),
      ]
    end

    def resolve_title_filter(node)
      if node.title.nil?
        return nil
      end
      (clause, value) = node.title.resolve_query_for_type("sources.title")
      base_query.where(clause, value)
    end

    def resolve_source_type_filter(node)
      if node.source_type.nil?
        return nil
      end
      node.source_type.resolve_query_for_activerecord_enum(base_query, "sources.source_type")
    end

    def resolve_abstract_filter(node)
      if node.abstract.nil?
        return nil
      end

      (clause, value) = node.abstract.resolve_query_for_type("sources.abstract")
      base_query.where(clause, value)
    end

    def resolve_citation_filter(node)
      if node.citation.nil?
        return nil
      end

      (clause, value) = node.citation.resolve_query_for_type("sources.citation")
      base_query.where(clause, value)
    end

    def resolve_citation_id_filter(node)
      if node.citation_id.nil?
        return nil
      end

      (clause, value) = node.citation_id.resolve_query_for_type("sources.citation_id")
      base_query.where(clause, value)
    end

    def resolve_is_retracted_filter(node)
      if node.is_retracted.nil?
        return nil
      end
      (clause, value) = node.is_retracted.resolve_query_for_type("sources.retracted")
      base_query.where(clause, value)
    end

    def resolve_journal_filter(node)
      if node.journal.nil?
        return nil
      end

      (clause, value) = node.journal.resolve_query_for_type("sources.journal")
      base_query.where(clause, value)
    end
  end
end
