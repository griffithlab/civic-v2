class ArrayWrapper
  def self.wrap(array, field_name: nil, method_name: nil, separator: ',')
    items = if field_name
      Array(array).map { |f| f[field_name] }
    elsif method_name
      Array(array).map { |f| f.send(method_name) }
    else
      Array(array)
    end

    items.join(separator)
  end
end
