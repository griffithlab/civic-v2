module Types
  module AdvancedSearch
    class OntologyTermSearchOperator < Types::BaseEnum
      value "EQ", description: "Equals"
      value "NE", description: "Does not equal"
      value "EQ_SELF_OR_DIRECT_CHILDREN", description: "Include the matched term and any direct child terms"
      value "EQ_SELF_OR_DIRECT_PARENTS", description: "Include the matched term and its direct parent terms"
      value "EQ_SELF_OR_ALL_ANCESTORS", description: "Include the matched term along with all ancestor terms recursively"
      value "EQ_SELF_OR_ALL_DESCENDANTS", description: "Include the matched term and any descendant terms recursively"
      value "EQ_SELF_AND_SIBLINGS", description: "Include the matched term and any sibling terms"
    end

    class OntologyTermSearchInput < StringSearchInput
      argument :operator, Types::AdvancedSearch::OntologyTermSearchOperator, required: true

      def resolve_ontology_query(base_query, column_name, value_override: nil)
        v = if value_override.present?
          value_override
        else
          value
        end

        case operator
        when "EQ"
          base_query.where(column_name => v)
        when "NE"
          base_query.where.not(column_name => v)
        when "EQ_SELF_OR_DIRECT_CHILDREN"
          term = base_query.find_by(column_name => v)
          if term
            ids = term.direct_children.pluck(:id) << term.id
            base_query.where(id: ids)
          else
            base_query.none
          end
        when "EQ_SELF_OR_ALL_DESCENDANTS"
          term = base_query.find_by(column_name => v)
          if term
            ids = term.all_children.pluck(:id) << term.id
            base_query.where(id: ids)
          else
            base_query.none
          end
        when "EQ_SELF_OR_DIRECT_PARENTS"
          term = base_query.find_by(column_name => v)
          if term
            ids = term.direct_parents.pluck(:id) << term.id
            base_query.where(id: ids)
          else
            base_query.none
          end
        when "EQ_SELF_OR_ALL_ANCESTORS"
          term = base_query.find_by(column_name => v)
          if term
            ids = term.all_parents.pluck(:id) << term.id
            base_query.where(id: ids)
          else
            base_query.none
          end
        when "EQ_SELF_AND_SIBLINGS"
          term = base_query.find_by(column_name => v)
          if term
            ids = term.siblings.pluck(:id) << term.id
            base_query.where(id: ids)
          else
            base_query.none
          end
        end
      end
    end
  end
end
