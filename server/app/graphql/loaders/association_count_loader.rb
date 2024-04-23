module Loaders
  class AssociationCountLoader < GraphQL::Batch::Loader
    def initialize(model, association: )
      @model = model
      @association = association
    end

    def perform(ids)
      query(ids).each do |id, count|
        fulfill(id, count)
      end
      ids.each { |id| fulfill(id, 0) unless fulfilled?(id) }
    end

    def query(ids)
      @model
        .joins(@association)
        .where(@model.table_name => { id: ids })
        .group("#{@model.table_name}.id")
        .count
    end
  end
end
