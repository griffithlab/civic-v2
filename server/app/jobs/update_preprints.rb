class UpdatePreprints < ApplicationJob
  attr_reader :civicbot_user

  def perform
    @civicbot_user = User.find(Constants::CIVICBOT_USER_ID)
    update_pubmed_preprints
    update_biorxiv_preprints
    update_medrxiv_preprints
  end

  def update_pubmed_preprints
    Source.where(source_type: "PubMed", is_preprint: true).each do |source|
      if source.evidence_items.count > 0
        resp = Scrapers::PubMed.call_pubmed_api(source.citation_id)
        update_pmid = resp.update_pmid

        unless update_pmid.nil?
          update_source = create_update_source("PubMed", update_pmid)
          create_revisions(source, update_source)
        end
      end
    end
  end

  def update_biorxiv_preprints
    Source.where(source_type: "bioRxiv", is_preprint: true).each do |source|
      if source.evidence_items.count > 0
        resp = Scrapers::BioRxiv.fetch_biorxiv_page(doi: source.citation_id)
        update_doi = resp.update_doi

        unless update_doi.nil?
          update_pmid = get_pmid_from_doi(update_doi)

          unless update_pmid.nil?
            update_source = create_update_source("PubMed", update_pmid)
            create_revisions(source, update_source)
          end
        end
      end
    end
  end

  def update_medrxiv_preprints
    Source.where(source_type: "medRxiv", is_preprint: true).each do |source|
      if source.evidence_items.count > 0
        resp = Scrapers::MedRxiv.fetch_medrxiv_page(doi: source.citation_id)
        update_doi = resp.update_doi

        unless update_doi.nil?
          update_pmid = get_pmid_from_doi(update_doi)

          unless update_pmid.nil?
            update_source = create_update_source("PubMed", update_pmid)
            create_revisions(source, update_source)
          end
        end
      end
    end
  end

  def get_pmid_from_doi(doi)
    url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=#{doi}&retmode=json"
    response_body = Scrapers::Util.make_get_request(url)
    json = JSON(response_body)
    if json["esearchresult"]["count"].to_i == 1
      json["esearchresult"]["idlist"][0]
    else
      nil
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
        )

        res = cmd.perform

        if !res.succeeded?
          Rails.logger.error("Failed to suggest revision to update preprint from SID#{source.id} to #{update_source.source_type} #{update_source.citation_id} for EID#{evidence.id}")
          raise StandardError.new(res.errors.join(", "))
        end
      end
    end
  end
end
