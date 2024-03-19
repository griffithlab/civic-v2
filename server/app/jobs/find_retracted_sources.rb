require 'tempfile'
require 'open-uri'

class FindRetractedSources < ApplicationJob
  attr_reader :retraction_watch_file

  def perform
    begin
      create_tempfile
      download_file
      update_source_retracted_status
    ensure
      remove_download
    end
  end

  def create_tempfile
    @retraction_watch_file = Tempfile.new('retraction_watch_download', File.join(Rails.root, 'tmp'))
  end

  def download_file
    download_stream = URI.open(latest_retraction_watch_path)
    IO.copy_stream(download_stream, retraction_watch_file)
  end

  def update_source_retracted_status
    importer = Importer::RetractionWatch.new(retraction_watch_file)
    importer.import
  end

  def remove_download
    retraction_watch_file.close
    retraction_watch_file.unlink
  end

  def latest_retraction_watch_path
    "https://api.labs.crossref.org/data/retractionwatch?ginny@crossref.org"
  end
end

