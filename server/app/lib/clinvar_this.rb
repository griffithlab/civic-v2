class ClinvarThis
  attr_reader :api_key, :batch_name, :json_file
  def initialize(api_key, batch_name, json_file)
    @api_key = api_key
    @batch_name = batch_name
    @json_file = json_file
  end

  def auth
    exec_cmd("config", "set", "auth-token", api_key.api_key)
  end

  def import_batch
    exec_cmd("batch", "import", "--name", batch_name, json_file)
  end

  def submit_batch
    exec_cmd("batch", "submit", batch_name)
  end

  def get_batch_status
    (stdout, _) = exec_cmd("batch", "retrieve", batch_name)

    output_path_line = stdout.split("\n").select { |line| line =~ /Writing out response to/ }

    if output_path_line.size == 0
      raise StandardError.new("No output path found for batch")
    end

    if output_path_line.size > 1
      raise StandardError.new("Output path for batch is ambiguous")
    end

    output_json_file = output_path_line.first.split.last

    JSON.parse(File.read(output_json_file))
  end

  def cleanup
    config_file = File.join(Dir.home, ".config/clinvar-this/config.toml")
    FileUtils.rm(config_file)
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
