module Importer
  class NciThesaurusMirror
    attr_reader :parser, :version

    def initialize(path, version = Time.now.utc.iso8601)
      @parser = Obo::Parser.new(path)
      @version = version
    end

    def import
      parser.elements.each do |elem|
        if valid_entry?(elem)
          create_object_from_entry(elem)
        end
      end
    end

    def valid_entry?(entry)
      semantic_types = semantic_types(entry)
      obsolete_concepts = obsolete_concepts(entry)
      (entry['id'].present? && entry['name'].present? && entry.respond_to?(:name) && entry.name == 'Term' &&
        (semantic_types & valid_semantic_types).length > 0 &&
        (obsolete_concepts & ['Obsolete_Concept']).length == 0)
    end

    def semantic_types(entry)
      matcher = /^NCIT:P106 "(?<semantic_type>.+)"/
      entry['property_value'].map { |s| s.match(matcher) }.compact.map { |s| s[:semantic_type] }
    end

    def valid_semantic_types
      ['Pharmacologic Substance', 'Pharmacological Substance', 'Clinical Drug', 'Therapeutic or Preventive Procedure', 'Hazardous or Poisonous Substance']
    end

    def obsolete_concepts(entry)
      matcher = /^NCIT:P310 "(?<obsolete_concept>.+)"/
      entry['property_value'].map { |s| s.match(matcher) }.compact.map { |s| s[:obsolete_concept] }
    end

    def create_object_from_entry(entry)
      name = Therapy.capitalize_name(entry['name'])
      ncit_id = entry['id'].sub('NCIT:', '')
      therapy = ::Therapy.where(ncit_id: ncit_id).first_or_initialize
      therapy.name = name
      synonyms = process_synonyms(entry['synonym']).uniq
      synonyms.each do |syn|
        therapy_alias = ::TherapyAlias.where(name: syn).first_or_create
        if !therapy.therapy_aliases.map{|a| a.name.downcase}.include?(syn.downcase) && !(syn.downcase == therapy.name.downcase)
          therapy.therapy_aliases << therapy_alias
        end
      end
      therapy.save
    end

    def process_synonyms(synonym_element)
      vals = if synonym_element.blank?
        []
      elsif synonym_element.is_a?(String)
        [extract_synonym(synonym_element)]
      elsif synonym_element.is_a?(Array)
        synonym_element.map { |s| extract_synonym(s) }
      end
      vals.compact
    end

    def extract_synonym(value)
      if match_data = value.match(/^"(?<name>.+)" EXACT \[.*\]/)
        Therapy.capitalize_name(match_data[:name])
      else
        nil
      end
    end
  end
end

