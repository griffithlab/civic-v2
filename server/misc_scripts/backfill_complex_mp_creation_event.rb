fout = File.open('complex_mps_without_creation_event', 'w')

MolecularProfile.find_each do |mp|
  if mp.variants.length == 1
      next
  end

  if CreateComplexMolecularProfileActivity.find_by(subject: mp)
    next
  end

  e = mp.evidence_items.first
  if e && e.submission_activity
    submission_activity = e.submission_activity

    activity = CreateComplexMolecularProfileActivity.create!(
      subject: mp,
      user: submission_activity.user,
      organization: submission_activity.organization,
      created_at: submission_activity.created_at,
    )

    activity.verbiage = activity.generate_verbiage()
    activity.save!

    event = Event.where(
      action: 'complex molecular profile created',
      originating_user: submission_activity.user,
      subject: mp,
      organization: submission_activity.organization,
      originating_object: mp,
      created_at: submission_activity.created_at,
      activity: activity
    ).first_or_create!
  else
    fout.puts "https://civicdb.org/molecular-profiles/#{mp.id}"
  end
end
