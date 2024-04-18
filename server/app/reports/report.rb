class Report
  AVAILABLE_REPORTS = [
    ClingenCounts
  ]

  def initialize(params)
    setup(**params)
  rescue => e
    errors << e.message
  end

  attr_reader :data, :headers, :errors

  def self.name
    raise NotImplementedError.new("Specify in subclass")
  end

  def self.description
    raise NotImplementedError.new("Specify in subclass")
  end

  # Can users download this as a TSV
  def self.downloadable?
    true
  end

  # Can users view this directly in the admin UI
  def self.viewable?
    true
  end

  def self.inputs
    #format input_name: :type
    #supported types :text, :date, :boolean, :int
    {}
  end

  # Column headers for the report
  def headers
    raise NotImplementedError.new("Specify in subclass")
  end

  # Data rows. #execute should append rows to this list
  def data
    @data ||= []
  end

  # Append any errors here
  def errors
    @errors ||= []
  end

  def perform
    execute
  rescue => e
    errors << e.message
  end

  # Called from constructor.
  # Will receive named arguments from the form inputs
  # specified by self.inputs
  def setup
    raise NotImplementedError.new("Specify in subclass")
  end

  # Invoke the report logic. Must set data, headers, or errors
  def execute
    raise NotImplementedError.new("Specify in subclass")
  end
end
