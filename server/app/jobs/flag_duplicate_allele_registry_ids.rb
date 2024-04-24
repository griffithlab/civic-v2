class FlagDuplicateAlleleRegistryIds < ApplicationJob
  def perform
    duplicates = Variant.where(deprecated: false)
      .group(:allele_registry_id)
      .pluck(:allele_registry_id, 'array_agg(id)')
      .reject{|caid, ids| caid.nil? || caid == 'unregistered'}
      .select{|caid, ids| ids.count > 1}

    civicbot_user = User.find(385)
    duplicates.each do |caid, ids|
      variants = Variant.where(id: ids)
      variants.each do |variant|
        if variant.flags.select{|f| f.state == 'open' && f.open_activity.note =~ /This Variant may be a duplicate and may need to be deprecated/ && f.open_activity.user_id == 385}.count == 0
          Activity::FlagEntity.new(
            flagging_user: civicbot_user,
            flaggable: variant,
            organization_id: nil,
            note: "The Allele Registry ID of this Variant is used more than once. This Variant may be a duplicate and may need to be deprecated. The following Variants all resolved to Allele Registry ID \"#{caid}\": #{ids.join(', ')}"
          ).perform
        end
      end
    end
  end
end

