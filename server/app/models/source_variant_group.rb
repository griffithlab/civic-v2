class SourceVariantGroup < ActiveRecord::Base
  self.table_name = "sources_variant_groups"
  belongs_to :source
  belongs_to :variant_group
end
