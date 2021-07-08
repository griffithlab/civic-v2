class Resolvers::Quicksearch < GraphQL::Schema::Resolver
  type [Types::Quicksearch::SearchResult], null: false

  argument :query, String, required: true, description: 'The term to query for'

  def resolve(query: )
    results = Searchkick.search(
      query,
      models: [Gene, Variant, EvidenceItem, Assertion, VariantGroup, Revision],
      highlight: { tag: '<strong>' },
      limit: 10,
      fields: ['id^10', 'name', 'aliases']
    ).with_highlights(multiple: true)

    results.map do |res, highlights|
      {
        id: res.id,
        name: format_name(res.name, highlights),
        result_type: format_type_name(res),
        matching_text: format_highlights(highlights)
      }
    end
  end


  private
  def format_type_name(type)
    case type
    when Gene
      'GENE'
    when Variant
      'VARIANT'
    when VariantGroup
      'VARIANT_GROUP'
    when EvidenceItem
      'EVIDENCE_ITEM'
    when Assertion
      'ASSERTION'
    when Revision
      'REVISION'
    else
      raise StandardError.new('Unsupported type for quicksearch')
    end
  end

  def format_name(name, highlights)
    if highlights[:name]
      highlights[:name].first
    else
      name
    end
  end

  def format_highlights(highlights)
    rows = highlights.map do |field_name, matches|
      next if field_name == :name
      name = field_name.to_s.titleize
      match_string = matches.join(', ')
      "#{name}: #{match_string}"
    end
    rows.compact.join('<br/>')
  end
end
