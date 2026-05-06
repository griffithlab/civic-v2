class VariantsWithUnregisteredAlleleRegistryIds < Report
  def self.name
    "Variants with Unregistered Allele Registry IDs"
  end

  def self.description
    "Lists all variants where the allele_registry_id is 'unregistered'."
  end

  def headers
    [ "ID", "Name", "Link" ]
  end

  def setup; end

  def execute
    Variant.where(allele_registry_id: "unregistered").find_each do |variant|
      data << [
        variant.id,
        variant.name,
        "https://civicdb.org#{variant.link}",
      ]
    end
  end
end
