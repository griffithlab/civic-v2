require "csv"
require "zip"

module Importer
  class NciThesaurusMirror
    attr_reader :parser, :version, :parents

    def initialize(path, version = Time.now.utc.iso8601)
      zip_file = Zip::File.open(path)
      entry = zip_file.glob("*.txt").first
      csv_text = entry.get_input_stream.read
      @parser = CSV.parse(
        csv_text,
        col_sep: "\t",
        liberal_parsing: true,
        headers: [ "code", "concept_iri", "parents", "synonyms", "definition", "display_name", "concept_status", "semantic_type", "concept_in_subset" ],
      )
      @version = version
      @parents = {}
    end

    def import
      parser.each do |elem|
        if valid_entry?(elem)
          create_object_from_entry(elem)
          store_parent(elem)
        end
      end
      create_graph
    end

    def valid_entry?(entry)
      entry["concept_status"].nil? && entry["semantic_type"].split("|").any? do |t|
        valid_semantic_types.include?(t)
      end
    end

    def valid_semantic_types
      [ "Pharmacologic Substance", "Pharmacological Substance", "Clinical Drug", "Therapeutic or Preventive Procedure", "Hazardous or Poisonous Substance" ]
    end

    def create_object_from_entry(entry)
      synonyms = entry["synonyms"].split("|").map { |s| Therapy.capitalize_name(s) }
      name = synonyms.shift()
      ncit_id = entry["code"]
      therapy = ::Therapy.where(ncit_id: ncit_id).first_or_initialize
      therapy.name = name
      therapy.description = entry['definition']
      synonyms.each do |syn|
        therapy_alias = ::TherapyAlias.where(name: syn).first_or_create
        if !therapy.therapy_aliases.map { |a| a.name.downcase }.include?(syn.downcase) && !(syn.downcase == therapy.name.downcase)
          therapy.therapy_aliases << therapy_alias
        end
      end
      therapy.save
    end

    def store_parent(elem)
      if elem["parents"].present?
        parents[elem["code"]] = elem["parents"]
          .split("|")
          .map(&:strip)
      end
    end

    def create_graph
      parents.each do |elem_ncit, parent_ncits|
        parent_ncits.each do |parent_ncit|
          parent = Therapy.find_by(ncit_id: parent_ncit)
          child = Therapy.find_by(ncit_id: elem_ncit)
          if parent.present? && child.present?
            parent.add_child_term(child, relationship: "is_a")
          else
            Rails.logger.warn("Unexpected unknown NCIt: #{elem_ncit} or #{parent_ncit}")
          end
        end
      end
    end
  end
end
