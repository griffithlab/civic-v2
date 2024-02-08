require 'rbconfig'

class SetAlleleRegistryIdSingleVariant < AlleleRegistryIds

  def perform(variant)
    old_allele_registry_id = variant.allele_registry_id
    allele_registry_id = get_allele_registry_id(variant)
    if allele_registry_id == '_:CA' && old_allele_registry_id != 'unregistered'
      variant.allele_registry_id = 'unregistered'
      variant.save!
    elsif allele_registry_id.present? && allele_registry_id != '_:CA' && allele_registry_id != old_allele_registry_id
      variant.allele_registry_id = allele_registry_id
      variant.save!
      add_allele_registry_link(allele_registry_id)
    elsif old_allele_registry_id.present? && allele_registry_id.nil?
      variant.allele_registry_id = nil
      variant.save!
    end
    unless Variant.where(allele_registry_id: old_allele_registry_id).exists?
      if old_allele_registry_id != '_:CA' and old_allele_registry_id != 'undefined'
        delete_allele_registry_link(old_allele_registry_id)
      end
    end
    GenerateOpenCravatLink.perform_later(self)
  end
end
