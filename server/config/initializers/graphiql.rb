class GqlExamples
  attr_reader :initial_query, :examples

  def initialize(path)
    config_files =  Dir.glob("*.yml", base: path)
    @examples = config_files.map { |f| YAML.load_file(File.join(path, f)) }
      .sort_by { |e| e['order'] || 999 }

    @initial_query = @examples.first["query"]
  end
end

path = File.join(Rails.root, 'config', 'query_examples')
GQL_EXAMPLES = GqlExamples.new(path)

