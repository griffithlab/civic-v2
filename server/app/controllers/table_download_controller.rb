class TableDownloadController < ApplicationController
  include WithGraphqlVariables

  def download
    if BrowseTableDownloads.downloadable?(params[:table_name])
      stream_table(params[:table_name])
    else
      head :bad_request
    end
  end

  private

  def stream_table(table_name)
    exporter = BrowseTableDownloads::Exporter.new(
      table_name: table_name,
      variables: prepare_variables(params[:variables])
    )

    headers.delete("Content-Length")
    headers["Cache-Control"] = "no-cache"
    headers["Content-Type"] = "text/tab-separated-values"
    headers["Content-Disposition"] = "attachment; filename=\"#{table_name}-#{Date.today}.tsv\""
    headers["X-Accel-Buffering"] = "no"

    response.status = 200

    self.response_body = Enumerator.new do |stream|
      exporter.each_line do |line|
        stream << line
      end
    end
  end
end
