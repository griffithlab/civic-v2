class FrontendRouter
  attr_reader :id_type, :id, :domain, :tag_type

  def initialize(id_type, id, domain)
    @id_type = id_type || ""
    @domain = domain
    (@tag_type, @id) = remove_tag(id)
  end

  def url
    (entity, query_field, transform) = query_info
    if [ entity, query_field, id ].any? { |i| i.blank? }
      nil
    else
      # identity function if none defined
      transform ||= -> { _1 }
      obj = entity.find_by!(query_field => transform.call(id))
      adaptor = "LinkAdaptors::#{obj.class.to_s.demodulize}".constantize.new(obj)
      "#{domain}#{adaptor.base_path}"
    end
  end

  private
  def query_info
    case id_type
    when /genes?/
      [
        Feature.where(feature_instance_type: "Features::Gene"), :id
      ]
    when /fusions?/
      [
        Feature.where(feature_instance_type: "Features::Fusion"), :id
      ]
    when /factors?/
      [
        Feature.where(feature_instance_type: "Features::Factor"), :id
      ]
    when /features?/
      [ Feature, :id ]
    when /variants?\z/
      [ Variant, :id ]
    when /evidence/, /evidence_items?/
      [ EvidenceItem, :id ]
    when /molecular_profiles?/, /molecular-profiles?/
      [ MolecularProfile, :id ]
    when /entrez_id/
      [ Features::Gene, :entrez_id ]
    when /entrez_name/
      [
        Feature.where(feature_instance_type: "Features::Gene"), :name, -> { _1.upcase }
      ]
    when /variant_groups?/
      [ VariantGroup, :id ]
    when /revisions?/
      [ Revision, :id ]
    when /diseases?/
      [ Disease, :id ]
    when /doid/
      [ Disease.where(deprecated: false), :doid ]
    when /drugs?/
      [ Therapy, :id ]
    when /therapies?/
      [ Therapy, :id ]
    when /ncit_id/
      [ Therapy.where(deprecated: false), :ncit_id ]
    when /phenotypes?/
      [ Phenotype, :id ]
    when /hpo_id/
      [ Phenotype, :hpo_id ]
    when /assertions?/
      [ Assertion, :id ]
    when /sources?/
      [ Source, :id ]
    when /allele_registry/
      [ Variant.where(deprecated: false), :allele_registry_id ]
    when /id/
      case tag_type
      when "AID"
        [ Assertion, :id ]
      when "GID"
        [
          Feature.where(feature_instance_type: "Features::Gene"), :id
        ]
      when "FID"
        [ Feature, :id ]
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
    match = id_with_tag&.upcase&.match(/^(AID|GID|FID|VID|EID|SID|MPID)(\d+)$/)
    if match
      match.captures
    else
      [ nil, id_with_tag ]
    end
  end
end
