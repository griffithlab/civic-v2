module AdvancedSearches
  class Source < AdvancedSearches::Base
    def base_query
      ::Source
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        # resolve_source_type_filter(node),
        # Source type gives an invalid input syntax error, not sure how to fix it:
        # "PG::InvalidTextRepresentation: ERROR:  invalid input syntax for type integer: \"ASCO\"\nCONTEXT:  unnamed portal parameter $1 = '...'\n",
        # For now, journal does similar but without the preset options
        resolve_citation_filter(node),
        resolve_journal_filter(node),
        resolve_abstract_filter(node),
        resolve_publication_date_filter(node),
        # resolve_query_for_type(node),
      ]
    end

    def resolve_id_filter(node)
      if node.id.nil?
        return nil
      end

      (clause, value) = node.id.resolve_query_for_type("sources.id")
      base_query.where(clause, value)
    end

    def resolve_source_type_filter(node)
      if node.source_type.nil?
        return nil
      end
      (clause, value) = node.source_type.resolve_query_for_type("sources.source_type")
      # matching_ids = ::Source
      #                 .joins(:source_source_types)
      #                 .where(clause, value)
      base_query.where(clause, value)
    end

    def resolve_publication_date_filter(node)
      if node.publication_date.nil?
        return nil
      end
      puts "\n\n\n\n\n\n\n\n\n------------------------------------------\nDateStuff\n-------------------------------\n\n\n\n\n\n\n"
      (clause, value) = node.publication_date.resolve_query_for_type("sources.publication_year", "sources.publication_month", "sources.publication_day")
      base_query.where(clause, value)
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

    def resolve_journal_filter(node)
      if node.journal.nil?
        return nil
      end

      (clause, value) = node.journal.resolve_query_for_type("sources.journal")
      base_query.where(clause, value)
    end
  end
end
