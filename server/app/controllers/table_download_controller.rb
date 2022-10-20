require 'csv'

class TableDownloadController < ApplicationController
  include WithGraphqlVariables

  @@table_resolvers = {
    genes: Resolvers::BrowseGenes,
    evidence: Resolvers::TopLevelEvidenceItems,
    drugs: Resolvers::TopLevelDrugs,
    sources: Resolvers::BrowseSources,
    diseases: Resolvers::BrowseDiseases,
    molecular_profiles: Resolvers::BrowseMolecularProfiles,
    clinical_trials: Resolvers::TopLevelClinicalTrials,
    assertions: Resolvers::TopLevelAssertions
  }

  def download
    if res = @@table_resolvers[params[:table_name].to_sym]
      stream_table(resolver: res)
    else
      head :bad_request
    end
  end

  private
  def stream_table(resolver: )

    variables = prepare_variables(params[:variables])
    variables.delete('sortBy')
    variables.transform_keys! { |k| GraphQL::Schema::Member::BuildType.underscore(k) }

    headers.delete("Content-Length")
    headers["Cache-Control"] = "no-cache"
    headers["Content-Type"] = "text/csv"
    headers["Content-Disposition"] = "attachment; filename=\"#{params[:action]}-#{Date.today}.tsv\""
    headers["X-Accel-Buffering"] = "no"

    response.status = 200


    self.response_body = Enumerator.new do |collection|
      collection << CSV.generate_line(resolver.table_headers, col_sep: "\t")

      resolver.new(filters: variables).results.find_each do |result|
        collection << CSV.generate_line( resolver.to_row(object: result), col_sep: "\t")
      end
    end
  end
end
