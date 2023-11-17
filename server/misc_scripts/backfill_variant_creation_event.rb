fout = File.open('variants_without_creation_event', 'w')

Variant.find_each do |v|
  if CreateVariantActivity.find_by(subject: v)
    next
  end

  e = v.single_variant_molecular_profile.evidence_items.first
  if e && e.submission_activity
    submission_activity = e.submission_activity

    activity = CreateVariantActivity.create!(
      subject: v,
      user: submission_activity.user,
      organization: submission_activity.organization,
      created_at: submission_activity.created_at,
    )

    activity.linked_entities << v.single_variant_molecular_profile
    activity.verbiage = activity.generate_verbiage()
    activity.save!

    event = Event.where(
      action: 'variant created',
      originating_user: submission_activity.user,
      subject: v,
      organization: submission_activity.organization,
      originating_object: v,
      created_at: submission_activity.created_at,
      activity: activity
    ).first_or_create!
  else
    fout.puts "https://civicdb.org/variants/#{v.id}"
  end
end
