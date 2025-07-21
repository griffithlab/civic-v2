module Types::AdvancedSearch
  class DateSearchOperator < Types::BaseEnum
    value "BEF"
    value "IN"
    value "AFT"
  end

  class DateSearchInput < Types::BaseInputObject
    argument :comparison_operator, Types::AdvancedSearch::DateSearchOperator, required: true
    argument :year, Int, required: true
    argument :month, Int, required: false
    argument :day, Int, required: false

    def resolve_query_for_type(year_column, month_column, day_column)
      puts "\n\n\n\n\n\n\n\n"
      puts "#{year_column}-#{month_column}-#{day_column}"
      puts "#{year}-#{month}-#{day}"
      # puts [ "(#{year_column} < :year) OR (#{year_column} = :year AND #{month_column} < :month)", year: year, month: month ]
      puts "\n\n\n\n\n\n\n\n"
      if month.nil?
        case comparison_operator
        when "BEF"
          [ "#{year_column} <= ?", year ]
        when "IN"
          [ "#{year_column} = ?", year ]
        when "AFT"
          [ "#{year_column} >= ?", year ]
        end
      elsif day.nil?
        case comparison_operator
        when "BEF"
          [ "(#{year_column} < :year) OR (#{year_column} = :year AND #{month_column} <= :month)", year: year, month: month ]
        when "IN"
          [ "#{year_column} = :year AND #{month_column} = :month", year: year, month: month]
        when "AFT"
          [ "(#{year_column} > :year) OR (#{year_column} = :year AND #{month_column} >= :month)", year: year, month: month ]
        end
      else
        case comparison_operator
        when "BEF"
          [ "(#{year_column} < :year) OR (#{year_column} = :year AND #{month_column} < :month) OR (#{year_column} = :year AND #{month_column} = :month AND #{day_column} <= :day)", year: year, month: month, day: day ]
        when "IN"
          [ "#{year_column} = :year AND #{month_column} = :month AND #{day_column} = :day", year: year, month: month, day: day ]
        when "AFT"
          [ "(#{year_column} > :year) OR (#{year_column} = :year AND #{month_column} > :month) OR (#{year_column} = :year AND #{month_column} = :month AND #{day_column} >= :day)", year: year, month: month, day: day ]
        end
      end
    end
  end
end
