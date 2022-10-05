class ArrayWrapper
  def self.wrap(array, field_name: nil, separator: ',')
    items = if field_name
      Array(array).map { |f| f[field_name] }
    else
      Array(array)
    end

    items.join(separator)
  end
end
