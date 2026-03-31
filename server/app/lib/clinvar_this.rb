class ClinvarThis
  attr_reader :api_key, :batch_name

  def initialize(api_key, batch_name)
    @api_key = api_key
    @batch_name = batch_name
  end

  def auth
    exec_cmd("config", "set", "auth_token", api_key)
  end

  def import_batch(gks_json_file)
    # TODO - a global metadata flag will not work once we have a mixture of 37 and 38 curated
    exec_cmd("batch", "import", "--name", batch_name, "-m submitted_assembly=GRCh37", gks_json_file)
  end

  def submit_batch
    (_, stderr) = exec_cmd("batch", "submit", "--use-testing", batch_name)
    extract_json_response(stderr, /Writing out server response to/)
  end

  def get_batch_status
    (_, stderr) = exec_cmd("batch", "retrieve", "--use-testing", batch_name)
    extract_json_response(stderr, /Writing out response to/)
  end

  def cleanup
    config_file = File.join(Dir.home, ".config/clinvar-this/config.toml")
    FileUtils.rm(config_file)
  end

  def extract_json_response(resp, pattern)
    output_path_line = resp.split("\n").select { |line| line =~ pattern }

    if output_path_line.size == 0
      raise StandardError.new("No output path found for batch")
    end

    if output_path_line.size > 1
      raise StandardError.new("Output path for batch is ambiguous")
    end

    output_json_file = output_path_line.first.split.last

    JSON.parse(File.read(output_json_file))
  end

  private
  def exec_cmd(*args)
    stdout, stderr, status = Open3.capture3(
        "clinvar-this",
        *args
    )

    if !status.success?
      raise stderr
    end

    [ stdout, stderr ]
  end
end
