# Run from the Rails console:
#   load Rails.root.join("misc_scripts/curation_counts_since.rb").to_s
# Or: bin/rails runner misc_scripts/curation_counts_since.rb
#
# Inclusive cutoff in the application's time zone. Change this date as needed.
cutoff = Time.zone.local(2022, 11, 14)

# Status filters reflect the current database state, not status at submission.
evidence_items = EvidenceItem.where.not(status: "rejected")
assertions = Assertion.where.not(status: "rejected")

# Count entities, not activity rows, so duplicate submission activities cannot
# inflate the counts. Historical submission activities were backfilled from
# events using their original timestamps (see misc_scripts/activity_backfill).
submitted_evidence_item_ids = SubmitEvidenceItemActivity
  .where(subject_type: "EvidenceItem", created_at: cutoff..)
  .select(:subject_id)
submitted_assertion_ids = SubmitAssertionActivity
  .where(subject_type: "Assertion", created_at: cutoff..)
  .select(:subject_id)

# Assertions reference sources through evidence_items. After excluding rejected
# Evidence Items, any source linked to a qualifying assertion already qualifies
# through its Evidence Item, so a separate assertion join would be redundant.
# Associations may have been added at any time; only the SOURCE creation date
# is restricted. Source suggestions qualify regardless of suggestion status.
# OR-ed subqueries count each source once, even with multiple associations.
new_sources = Source.where(created_at: cutoff..)
qualifying_sources = new_sources
  .where(id: evidence_items.select(:source_id))
  .or(new_sources.where(id: SourceSuggestion.select(:source_id)))

counts = {
  evidence_items_submitted: evidence_items.where(id: submitted_evidence_item_ids).count,
  new_sources: qualifying_sources.count,
  assertions_submitted: assertions.where(id: submitted_assertion_ids).count,
  # Each activity is one curation action and may produce multiple events.
  # Include all activity types, including rejection/moderation actions and
  # activities involving entities that are now rejected.
  total_curation_activities: Activity.where(created_at: cutoff..).count,
}

puts "Curation counts since #{cutoff.iso8601} (inclusive; #{Time.zone.name})"
counts.each { |label, count| puts "#{label}: #{count}" }
counts
