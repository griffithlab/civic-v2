Trestle.admin(:reports) do
  menu do
    group :tools do
      item :reports, icon: "fas fa-file-alt"
    end
  end

  controller do
    def index
      @reports = Reports::AVAILABLE_REPORTS
    end

    def show
      @report = Reports::AVAILABLE_REPORTS.find { |x| params[:name] == x.name }
    end

    def generate_report
      @report = Reports::AVAILABLE_REPORTS.find { |x| params[:name] == x.name }
      report_params = params.permit(@report.inputs.keys).to_h.symbolize_keys
      #checkbox will come in as 0 or 1
      #cast it to a boolean here so reports dont have to worry about that
      report_params.each do |key, val|
        if @report.inputs[key] == :boolean
          report_params[key] =  ActiveRecord::Type::Boolean.new.cast(val)
        end
      end
      report_instance = @report.new(report_params)
      report_instance.perform unless report_instance.errors.any?

      if report_instance.errors.any?
        flash[:error] = report_instance.errors.join("\n")
        render :show
      else
        if params[:format] == "download"
          stream_table(report_instance)
        else
          @data = report_instance.data
          @headers = report_instance.headers
          render :result
        end
      end
    end

    private
    def stream_table(report)
      require 'csv'
      headers.delete("Content-Length")
      headers["Cache-Control"] = "no-cache"
      headers["Content-Type"] = "text/csv"
      headers["Content-Disposition"] = "attachment; filename=\"#{report.class.name}-#{Date.today}.tsv\""
      headers["X-Accel-Buffering"] = "no"
      response.status = 200

      self.response_body = Enumerator.new do |stream|
        stream << CSV.generate_line(report.headers, col_sep: "\t")
        report.data.each do |row|
          stream << CSV.generate_line(row, col_sep: "\t")
        end
      end
    end
  end

  routes do
    get '/:name', action: :show
    post '/:name', action: :generate_report
  end
end
