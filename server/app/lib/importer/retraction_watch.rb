require "csv"
module Importer
  class RetractionWatch
    attr_reader :file_path, :existing_retracted_source_ids
    def initialize(file_path)
      @file_path = file_path
      @existing_retracted_source_ids = Source.where(retracted: true).pluck(:id)
    end

    def import
      update_retraction_status
      reset_removed_sources
    end

    private
    def update_retraction_status
      ActiveRecord::Base.transaction do
        File.open(file_path, "r:ISO-8859-1") do |file|
          CSV.foreach(file, col_sep: ",", headers: true, liberal_parsing: true, encoding: "iso-8859-1:utf-8") do |line|
            pubmed_ids = parse_pubmed_ids(line)
            next unless pubmed_ids.size > 0
            process_line(pubmed_ids, line)
          end
        end
      end
    end

    def parse_pubmed_ids(line)
      pubmed_ids = [ "RetractionPubMedID", "OriginalPaperPubMedID" ].map do |key|
        if line[key].present? && line[key] != "0"
          line[key]
        end
      end
      pubmed_ids.compact
    end

    def process_line(pubmed_ids, line)
      sources = Source.where(citation_id: pubmed_ids, source_type: "PubMed")
      if sources.present?
        sources.each do |source|
          original_retraction_nature = source.retraction_nature
          source.retracted = true
          source.retraction_nature = line["RetractionNature"]
          month, day, year = line["RetractionDate"].split(" ")[0].split("/")
          source.retraction_date = DateTime.new(year.to_i, month.to_i, day.to_i)
          source.retraction_reasons = line["Reason"]
          source.save!

          if line["RetractionNature"] == "Retraction"
            add_eid_flags(source)
          elsif original_retraction_nature == "Retraction" and line["RetractionNature"] != "Retraction"
            resolve_eid_flags(source)
            flag_eids_for_reevaluation(source)
          end

          existing_retracted_source_ids.delete(source.id)
        end
      end
    end

    def add_eid_flags(source)
      civicbot_user_id = Constants::CIVICBOT_USER_ID
      civicbot_user = User.find(civicbot_user_id)
      text = "Source has been marked as retracted by Retraction Watch"
      source.evidence_items.each do |obj|
        if obj.flags.select { |f| f.state == "open" && f.open_activity.note == text && f.open_activity.user_id == civicbot_user_id }.count == 0
          Activities::FlagEntity.new(
            flagging_user: civicbot_user,
            flaggable: obj,
            organization_id: nil,
            note: text
          ).perform
        end
      end
    end

    def resolve_eid_flags(source)
      civicbot_user_id = Constants::CIVICBOT_USER_ID
      civicbot_user = User.find(civicbot_user_id)
      original_flag_text = "Source has been marked as retracted by Retraction Watch"
      resolving_text = "Source is no longer marked as retracted by Retraction Watch"
      source.evidence_items.each do |obj|
        obj.flags.select { |f| f.state == "open" && f.open_activity.note == text && f.open_activity.user_id == civicbot_user_id }.each do |flag|
          cmd = Activities::ResolveFlag.new(
            flag: flag,
            resolving_user: civicbot_user,
            organization_id: nil,
            note: resolving_text
          ).perform
        end
      end
    end

    def flag_eids_for_reevaluation(source)
      civicbot_user_id = Constants::CIVICBOT_USER_ID
      civicbot_user = User.find(civicbot_user_id)
      text = "Source is no longer marked as retracted by Retraction Watch. Re-evaluate EID for potential acceptance."
      source.evidence_items.select { |e| e.status == "rejected" }.each do |obj|
        if obj.flags.select { |f| f.state == "open" && f.open_activity.note == text && f.open_activity.user_id == civicbot_user_id }.count == 0
          Activities::FlagEntity.new(
            flagging_user: civicbot_user,
            flaggable: obj,
            organization_id: nil,
            note: text
          ).perform
        end
      end
    end

    def reset_removed_sources
      existing_retracted_source_ids.each do |source_id|
        source = Source.find(source_id)
        source.retracted = false
        source.retraction_nature = nil
        source.retraction_date = nil
        source.retraction_reasons = nil
        source.save!

        resolve_eid_flags(source)
        flag_eids_for_reevaluation(source)
      end
    end
  end
end
