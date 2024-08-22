module Resolvers::Shared::SearchHelpers
  def json_name_query_for_column(table_name, col)
    raise 'Must supply a table_name' if table_name.nil?
    raise 'Must supply a column name' if col.nil?
    "#{table_name}.id IN (select d.id FROM #{table_name} d, json_array_elements(d.#{col}) dr where dr->>'name' ILIKE ?)"
  end

  def array_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "EXISTS (SELECT * FROM (SELECT unnest(#{col})) x(name) where name ILIKE ?)"
  end

  def int_array_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "EXISTS (SELECT * FROM (SELECT unnest(#{col})) x(id) where id = ?)"
  end
end
