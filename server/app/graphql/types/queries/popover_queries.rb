module Types::Queries
  module PopoverQueries
    def self.included(klass)
      klass.field :disease_popover, Types::Popovers::DiseasePopoverType, null: true do
        description "Retrieve popover fields for a specific disease."
        argument :id, GraphQL::Types::Int, required: true
      end

      klass.field :therapy_popover, Types::Popovers::TherapyPopoverType, null: true do
        description "Retrieve popover fields for a specific therapy."
        argument :id, GraphQL::Types::Int, required: true
      end

      klass.field :phenotype_popover, Types::Popovers::PhenotypePopoverType, null: true do
        description "Retrieve popover fields for a specific phenotype."
        argument :id, GraphQL::Types::Int, required: true
      end

      klass.field :source_popover, Types::Popovers::SourcePopoverType, null: true do
        description "Retrieve popover fields for a specific source."
        argument :id, GraphQL::Types::Int, required: true
      end

      klass.field :variant_type_popover, Types::Popovers::VariantTypePopoverType, null: true do
        description "Retrieve popover fields for a specific variant type."
        argument :id, GraphQL::Types::Int, required: true
      end


      def disease_popover(id:)
        Disease.find(id)
      end

      def therapy_popover(id:)
        Therapy.find(id)
      end

      def phenotype_popover(id:)
        Phenotype.find(id)
      end

      def source_popover(id:)
        Source.find(id)
      end

      def variant_type_popover(id:)
        VariantType.find(id)
      end
    end
  end
end
