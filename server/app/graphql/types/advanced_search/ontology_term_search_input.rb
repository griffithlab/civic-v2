module Types
  module AdvancedSearch
    class OntologyTermSearchOperator < Types::BaseEnum
      value "EQ", description: "Equals"
      value "NE", description: "Does not equal"
      value "WITH_CHILDREN", description: "Include the matched term and any child terms"
      value "WITH_PARENT", description: "Include the matched term and its parent term"
    end

    class OntologyTermSearchInput < StringSearchInput
      argument :operator, Types::AdvancedSearch::OntologyTermSearchOperator, required: true

      def resolve_ontology_query(base_query, column_name)
        case operator
        when "EQ"
          base_query.where(column_name => value)
        when "NE"
          base_query.where.not(column_name => value)
        when "WITH_CHILDREN"
          term = base_query.find_by(column_name => value)
          if term
            ids = term.children.pluck(:id) << term.id
            base_query.where(id: ids)
          else
            base_query.none
          end
        when "WITH_PARENT"
          term = base_query.find_by(column_name => value)
          if term
            ids = term.parent.pluck(:id) << term.id
            base_query.where(id: ids)
          else
            base_query.none
          end
        end
      end
    end
  end
end
