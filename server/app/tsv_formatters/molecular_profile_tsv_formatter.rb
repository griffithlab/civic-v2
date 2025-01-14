class MolecularProfileTsvFormatter
  def self.objects
    MolecularProfile.eager_load(:variants, :evidence_items, :assertions, :molecular_profile_aliases)
      .left_joins(:evidence_items)
      .where("evidence_items.status = 'accepted' OR assertions.id IS NOT NULL")
  end

  def self.headers
    [
      'name',
      'molecular_profile_id',
      'summary',
      'variant_ids',
      'variants_civic_url',
      'evidence_score',
      'evidence_item_ids',
      'evidence_items_civic_url',
      'assertion_ids',
      'assertions_civic_url',
      'aliases',
      'last_review_date',
      'is_flagged'
    ]
  end


  def self.row_from_object(mp)
    [
      mp.display_name,
      mp.id,
      mp.description&.squish,
      mp.variants.map(&:id).join(', '),
      mp.variants.map {|variant| LinkAdaptors::Variant.new(variant).permalink_path(include_domain: true) }.join(', '),
      mp.evidence_score,
      mp.evidence_items.map(&:id).join(', '),
      mp.evidence_items.map {|eid| LinkAdaptors::EvidenceItem.new(eid).permalink_path(include_domain: true) }.join(', '),
      mp.assertions.map(&:id).join(', '),
      mp.assertions.map {|aid| LinkAdaptors::Assertion.new(aid).permalink_path(include_domain: true) }.join(', '),
      mp.molecular_profile_aliases.map(&:name).join(', '),
      mp.updated_at,
      mp.flagged
    ]
  end

  def self.file_name
    'MolecularProfileSummaries.tsv'
  end
end
