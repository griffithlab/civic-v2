module Types
  module AdvancedSearch
    class DnaBaseStringInput < StringSearchInput
      description "String search input that only accepts DNA bases (A, C, T, G, /)"

      DNA_BASE_REGEX = /\A[ACTG\/]+\z/

      def prepare
        input = super
        return input if input.nil?

        if input.value.present? && !input.value.match?(DNA_BASE_REGEX)
          raise GraphQL::ExecutionError, "DNA bases must only contain A, C, T, G, or / characters"
        end

        input
      end
    end
  end
end
