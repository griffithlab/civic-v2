class CivicStats

  def self.homepage_stats
    [
      Feature,
      Variant,
      EvidenceItem,
      Therapy,
      Disease,
      Source,
      User,
      Comment,
      Revision,
      Assertion,
      MolecularProfile
    ].each_with_object({}) do |klass, h|
      h[klass.table_name] = {
        new_this_week: klass.count_this_week,
        new_this_month: klass.count_this_month,
        new_this_year: klass.count_this_year,
        all_time: klass.count_all_time
      }
    end
  end
end

