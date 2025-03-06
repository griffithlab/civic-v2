class GenerateMonthlyTsvs < GenerateTsvs
  def release_path
    @dir_name ||= Date.today.beginning_of_month.strftime("%d-%b-%Y")
  end

  def beginning_of_next_month
    Date.today
      .beginning_of_month
      .next_month
      .midnight
  end

  def filename_prefix
    release_path
  end
end
