class Resolvers::Quicksearch < GraphQL::Schema::Resolver
  type [Types::Quicksearch::SearchResult], null: false

  argument :query, String, required: true, description: 'The term to query for'
  argument :types, [Types::Quicksearch::SearchableEntities], required: false,
    description: 'The types of objects to search. Omitting this value searches all.'
  argument :highlight_matches, Boolean, required: false,
    description: 'Should matches come back highlighted'

  def resolve(query:, types: nil, highlight_matches: false)
    query_targets = if types.blank?
                      [
                       Feature,
                       Variant,
                       EvidenceItem,
                       Assertion,
                       VariantGroup,
                       Revision,
                       MolecularProfile,
                       Therapy,
                       Disease
                      ]
                    else
                      types
                    end

    tag = if highlight_matches
            { tag: '<strong>' }
          else
            { tag: '' }
          end

    results = Searchkick.search(
                  query,
                  models: query_targets,
                  highlight: tag,
                  limit: 10,
                  fields: [
                    {'id^10' => :word },
                    {'ncit_id' => :word },
                    {'doid' => :word },
                    {'name^10' => :word },
                    {'aliases' => :word_start },
                    {'feature' => :word },
                    {'feature_type' => :word }
                  ]).with_highlights(multiple: true)

    results.map do |res, highlights|
      {
        id: res.id,
        name: format_name(res.name, highlights),
        result_type: res.class.base_class,
        matching_text: format_highlights(highlights)
      }
    end
  end


  private
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
    name = field_name.to_s.split(".").first&.titleize
      match_string = matches.join(', ')
      "#{name}: #{match_string}"
    end
    rows.compact.join('<br/>')
  end
end
