module Importer
  class DiseaseOntologyMirror
    attr_reader :parser, :version, :unprocessed_doids

    def initialize(path, version = Time.now.utc.iso8601)
      @parser = Obo::Parser.new(path)
      @version = version
      @unprocessed_doids = Disease.where.not(doid: nil).pluck(:doid)
    end

    def import
      parser.elements.each do |elem|
        next unless valid_entry?(elem)
        create_object_from_entry(elem)
      end
      delete_unprocessed_diseases
    end

    private
    def valid_entry?(entry)
      entry["id"].present? && entry["name"].present? && entry.respond_to?(:name) && entry.name == "Term"
    end

    def create_object_from_entry(entry)
      display_name = Disease.capitalize_name(entry["name"])
      name = entry["name"]
      doid = parse_doid(entry["id"])
      synonyms = process_synonyms(entry["synonym"])
      disease = if (d = ::Disease.find_by(doid: doid))
                  d
      elsif (d = ::Disease.find_by(name: name))
                  d
      else (d = ::Disease.where(doid: doid).first_or_initialize)
                  d
      end
      disease.name = name
      disease.doid = doid
      disease.display_name = display_name
      disease.save
      assign_synonyms(disease, synonyms)
      unprocessed_doids.delete(disease.doid)
    end

    def process_synonyms(synonym_element)
      vals = if synonym_element.blank?
        []
      elsif synonym_element.is_a?(String)
        [ extract_synonym(synonym_element) ]
      elsif synonym_element.is_a?(Array)
        synonym_element.map { |s| extract_synonym(s) }
      end
      vals.compact
    end

    def extract_synonym(value)
      if match_data = value.match(/^"(?<name>.+)" EXACT \[.*\]$/)
        Disease.capitalize_name(match_data[:name])
      else
        nil
      end
    end

    def parse_doid(doid)
      doid.gsub("DOID:", "")
    end

    def assign_synonyms(disease, synonyms)
      synonyms.each do |syn|
        disease_alias = ::DiseaseAlias.where(name: syn).first_or_create
        current_aliases = disease.disease_aliases.to_a
        current_aliases << disease_alias
        disease.disease_aliases = current_aliases.uniq
      end
      removed_aliases = disease.disease_aliases.map { |a| a.name } - synonyms
      removed_aliases.each do |a|
        alias_to_remove = DiseaseAlias.find_by(name: a)
        disease.disease_aliases.delete(alias_to_remove)
      end
    end

    def delete_unprocessed_diseases
      # sanity check for the DOID api, bail early if we can't find "cancer"
      uri = URI(url_from_doid(162))
      resp = Net::HTTP.get_response(uri)
      if resp.code != "200"
        raise StandardError.new('Cannot find DOID entry for "cancer" is there an issue with the API?')
      end

      unprocessed_doids.each do |doid|
        d = Disease.find_by(doid: doid)
        if is_disease_with_no_relations?(d)
          d.disease_aliases.clear
          d.delete
        else
          uri = URI(url_from_doid(d.doid))
          resp = Net::HTTP.get_response(uri)
          if resp.code == "200"
            # DOID exists but isn't in the cancer slim file
            if [ "3852", "8432", "0060474", "3883", "14175", "3012", "0111503", "13481", "3205", "0111359", "0080894", "0111278", "0060060" ].include? d.doid
              # Non-cancer diseases don't belong in the cancer slim file and
              # need to be updated using the data returned by the API
              metadata = JSON.parse(resp.body)
              d.display_name = Disease.capitalize_name(metadata["name"])
              d.name = metadata["name"]
              synonyms = process_synonyms(metadata["synonym"])
              assign_synonyms(d, synonyms)
            else
              text =  "This entity uses a DO term that is not in the cancer slim file \"#{d.name}\" (DOID:#{d.doid})"
              add_flags(d, text)
            end
          else
            if resp.code == "500"
              # DOID is obsolete
              text = "This entity uses a deprecated DO term \"#{d.name}\" (DOID:#{d.doid})"
              add_flags(d, text)
            else
              raise StandardError.new(res.body)
            end
          end
        end
      end
      Disease.where(doid: nil).each do |d|
        if is_disease_with_no_relations?(d)
          d.disease_aliases.clear
          d.delete
        elsif [ "Solid Tumor", "Ventricular Dysfunction", "Acute Mountain Sickness", "Glioma", "Low Bone Mineral Density" ].include? d.name
          next
        else
          # Disease needs to have its DOID backfilled or needs to be added to
          # the DO to being with
          text = "This entity uses a disease term without an associated DOID \"#{d.name}\""
          add_flags(d, text)
        end
      end
    end

    def is_disease_with_no_relations?(d)
       d.evidence_items.count == 0 &&
       d.assertions.count == 0 &&
       d.source_suggestions.count == 0 &&
       revisions_count(d) == 0
    end

    def revisions_count(disease)
      Revision.where(field_name: "disease_id")
        .where(current_value: disease.id)
        .or(Revision.where(field_name: "disease_id").where(suggested_value: disease.id))
        .count
    end

    def url_from_doid(doid)
      URI.parse("https://disease-ontology.org/api/metadata/DOID:#{doid}/")
    end

    def add_flags(disease, text)
      civicbot_user = User.find(385)
      (disease.evidence_items + disease.assertions).each do |obj|
        if obj.flags.select { |f| f.state == "open" && f.open_activity.note == text && f.open_activity.user_id == 385 }.count == 0
          Activities::FlagEntity.new(
            flagging_user: civicbot_user,
            flaggable: obj,
            organization_id: nil,
            note: text
          ).perform
        end
      end
    end
  end
end
