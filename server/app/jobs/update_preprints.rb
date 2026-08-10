
class UpdatePreprints < ApplicationJob
  attr_reader :civicbot_user

  def perform
    @civicbot_user = User.find(Constants::CIVICBOT_USER_ID)
    update_pubmed_preprints
  end

  def update_pubmed_preprints
    Source.where(source_type: "PubMed", is_preprint: true).each do |source|
      resp = Scrapers::PubMed.call_pubmed_api(source.citation_id)
      update_pmid = resp.update_pmid

      update_source = create_update_source("PubMed", update_pmid)
      create_revisions(source, update_source)
    end
  end

  def create_update_source(source_type, citation_id)
    update_source = Source.find_by(source_type: source_type, citation_id: citation_id)
    if update_source.nil?
      update_source = Source.create(source_type: source_type, citation_id: citation_id)
      FetchSourceData.perform_later(update_source)
    end
    update_source
  end

  def create_revisions(source, update_source)
    source.evidence_items.each do |evidence|
      revisions = Revision.where(subject: evidence, field_name: "source_id", current_value: source.id, suggested_value: update_source.id)
      if revisions.empty?
        updated_evidence = evidence.dup
        updated_evidence.source = update_source
        revised_objs = Activities::RevisedObjectPair.new(existing_obj: evidence, updated_obj: updated_evidence)
        cmd = Activities::SuggestRevisionSet.new(
          revised_objects: revised_objs,
          subject: evidence,
          originating_user: civicbot_user,
          organization_id: nil,
          note: "Update preprint source to peer-reviewed source"
        ).perform
      end
    end
  end
end
