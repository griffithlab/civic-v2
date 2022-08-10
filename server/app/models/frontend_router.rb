class FrontendRouter
  attr_reader :id_type, :id, :domain, :tag_type

  def initialize(id_type, id, domain)
    @id_type = id_type || ''
    @domain = domain
    (@tag_type, @id) = remove_tag(id)
  end

  def url
    (entity, query_field) = query_info
    if [entity, query_field, id].any? { |i| i.blank? }
      nil
    else
      obj = entity.find_by!(query_field => id)
      adaptor = "LinkAdaptors::#{obj.class}".constantize.new(obj)
      "#{domain}#{adaptor.base_path}"
    end
  end

  private
  def query_info
    case id_type
    when /genes?/
      [ Gene, :id, ]
    when /variants?\z/
      [ Variant, :id, ]
    when /evidence/, /evidence_items?/
      [ EvidenceItem, :id, ]
    when /molecular_profiles?/, /molecular-profiles?/
      [ MolecularProfile, :id, ]
    when /entrez_id/
      [ Gene, :entrez_id, ]
    when /entrez_name/
      [ Gene, :name , ]
    when /variant_groups?/
      [ VariantGroup, :id, ]
    when /revisions?/
      [ Revision, :id ]
    when /diseases?/
      [ Disease, :id ]
    when /drugs?/
      [ Drug, :id ]
    when /assertions?/
      [ Assertion, :id ]
    when /sources?/
      [ Source, :id ]
    when /allele_registry/
      [ Variant, :allele_registry_id, ]
    when /id/
      case tag_type
      when "AID"
        [ Assertion, :id ]
      when "GID"
        [ Gene, :id ]
      when "VID"
        [ Variant, :id ]
      when "MPID"
        [ MolecularProfile, :id ]
      when "EID"
        [ EvidenceItem, :id ]
      when "SID"
        [ Source, :id ]
      else
        []
      end
    else
      []
    end
  end

  def remove_tag(id_with_tag)
    match = id_with_tag.upcase.match(/^(AID|GID|VID|EID|SID|MPID)(\d+)$/)
    if match
      match.captures
    else
      [nil, id_with_tag]
    end
  end
end
