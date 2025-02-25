require "csv"
require "zip"

module Importer
  class NciThesaurusMirror
    attr_reader :parser, :version

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
    end

    def import
      parser.each do |elem|
        if valid_entry?(elem)
          create_object_from_entry(elem)
        end
      end
    end

    def valid_entry?(entry)
      valid_semantic_types.include?(entry["semantic_type"]) && entry["concept_status"].nil?
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
      synonyms.each do |syn|
        therapy_alias = ::TherapyAlias.where(name: syn).first_or_create
        if !therapy.therapy_aliases.map { |a| a.name.downcase }.include?(syn.downcase) && !(syn.downcase == therapy.name.downcase)
          therapy.therapy_aliases << therapy_alias
        end
      end
      therapy.save
    end
  end
end
