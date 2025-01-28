require 'test_helper'

class FindInvalidClinvarRecordsTest < ActiveJob::TestCase
  setup do
    @job = FindInvalidClinvarRecords.new
    @job.stubs(:check_clinvar_id).with(FindInvalidClinvarRecords::KNOWN_GOOD_ID).yields(true)
    @job.stubs(:check_clinvar_id).with { |id| id != FindInvalidClinvarRecords::KNOWN_GOOD_ID }.yields(false)
    @variant = variants(:v600e)
    @clinvar_entry = clinvar_entries(:one)
    @variant.clinvar_entries << @clinvar_entry
  end

  test 'raises exception if known good id fails' do
    @job.stubs(:check_clinvar_id).yields(false)
    assert_raises(StandardError) { @job.perform }
  end

  test 'skips clinvar ID with value N/A' do
    @clinvar_entry.update(clinvar_id: 'N/A')
    assert_nothing_raised { @job.perform }
    assert_equal 0, Flag.count
  end

  test 'skips clinvar ID with value NONE FOUND' do
    @clinvar_entry.update(clinvar_id: 'NONE FOUND')
    assert_nothing_raised { @job.perform }
    assert_equal 0, Flag.count
  end

  test 'skips if flag already exists' do
    verbiage = @job.send(:flag_verbiage, @variant, @clinvar_entry.clinvar_id)

    flag = Flag.new(
      flaggable: @variant,
      state: 'open',
      flagging_user_id: Constants::CIVICBOT_USER_ID,
      open_activity: FlagEntityActivity.create!(note: verbiage, subject: @variant, user: users(:curator))
    )

    flag.save!

    @job.perform

    assert_equal 1, Flag.count
  end

  test 'creates flag on invalid record' do
    @job.perform
    assert_equal 1, Flag.count
  end

  test 'does not create flag on valid record' do
    @clinvar_entry.update(clinvar_id: FindInvalidClinvarRecords::KNOWN_GOOD_ID)
    @job.perform
    assert_equal 0, Flag.count
  end
end
