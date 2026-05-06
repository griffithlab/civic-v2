# class AddRelatedSources < ActiveRecord::Migration[7.1]
#   def up
#     create_enum :source_link_reason, ['same_clinical_trial', 'overlapping_data_or_patients', 'related_abstract', 'other']
#
#   end
#
#   def down
#     drop_table :source_links
#     execute <<-SQL
#       DROP TYPE source_link_reason;
#     SQL
#   end
# end
