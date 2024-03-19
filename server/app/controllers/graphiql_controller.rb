class GraphiqlController < ApplicationController
  layout false
  def show
    @initial_query = GQL_EXAMPLES.initial_query
    @examples = GQL_EXAMPLES.examples
  end
end
