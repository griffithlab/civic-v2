#!/usr/bin/env ruby

require_relative "../config/environment"
require "csv"

abort "Usage: bundle exec ruby misc_scripts/user_activity_report.rb DATE [OUTPUT]" unless ARGV[0]

cutoff = Time.zone.parse(ARGV[0])
abort "Invalid date: #{ARGV[0].inspect}" unless cutoff

output = ARGV[1] || "user_activity_report.tsv"
activities = Activity.where(created_at: cutoff..)
activity_types = activities.distinct.order(:type).pluck(:type)
counts = activities.group(:user_id, :type).count

CSV.open(output, "wb", col_sep: "\t") do |tsv|
  tsv << [ "username", "email", "total_activities", *activity_types ]

  User.where(id: counts.keys.map(&:first).uniq).find_each do |user|
    type_counts = activity_types.map { |type| counts.fetch([ user.id, type ], 0) }
    tsv << [ user.username, user.email, type_counts.sum, *type_counts ]
  end
end
