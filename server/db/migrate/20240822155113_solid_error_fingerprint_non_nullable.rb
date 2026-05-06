class SolidErrorFingerprintNonNullable < ActiveRecord::Migration[7.1]
  def up
    SolidErrors::Error.where(fingerprint: nil).find_each do |error|
      error_attributes = error.attributes.slice('exception_class', 'message', 'severity', 'source')
      fingerprint = Digest::SHA256.hexdigest(error_attributes.values.join)
      error.update_attribute(:fingerprint, fingerprint)
    end
    change_column_null :solid_errors, :fingerprint, false
  end

  def down
    change_column_null :solid_errors, :fingerprint, true
  end
end
