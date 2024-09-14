module Importer
  class SequenceOntologyMirror
    attr_reader :parser, :version, :obsolete_terms

    def initialize(path, version = Time.now.utc.iso8601)
      @parser = Obo::Parser.new(path)
      @version = version
      @obsolete_terms = []
    end

    def import
      ActiveRecord::Base.transaction do
        VariantType.rebuild!
        parser.elements.each do |elem|
          next unless valid_entry?(elem)
          store_parent(elem)
          create_object_from_entry(elem)
        end
        create_parent_links
        process_obsolete_terms
      end
    end

    private
    def valid_entry?(entry)
      if entry['is_obsolete'].present?
        obsolete_terms.append(entry)
        return false
      else
        ['id', 'name'].all? { |term| entry[term].present? }
      end
    end

    def store_parent(elem)
      @parents ||= {}
      if elem['is_a'].present?
        @parents[elem['id']] = Array(elem['is_a']).first
      end
    end

    def create_object_from_entry(entry)
      variant_type = VariantType.where(soid: entry['id']).first_or_initialize
      variant_type.display_name =  process_name(entry['name'])
      variant_type.name =  entry['name']
      variant_type.description =  process_description(entry['def'])
      variant_type.save
    end

    def process_name(name)
      capitalized = name.split('_').map { |word| word.capitalize }.join(' ')
      if match_data = capitalized.match(/\butr\b/i)
        match_data.pre_match + match_data.to_s.upcase + match_data.post_match
      else
        capitalized
      end
    end

    def process_description(desc)
      if desc && match_data = desc.match(/^"(?<desc>.+)" \[/)
        match_data[:desc]
      else
        ''
      end
    end

    def create_parent_links
      @parents.each do |elem_soid, parent_soid|
        parent = VariantType.find_by(soid: parent_soid)
        child = VariantType.find_by(soid: elem_soid)
        if parent.present? && child.present?
          child.move_to_child_of(parent)
          child.save
        end
      end
    end

    def process_obsolete_terms
      obsolete_terms.each do |term|
        obsolete_type = VariantType.find_by(soid: term['id'])
        unless obsolete_type.nil?
          if obsolete_type.variants.count == 0
            obsolete_type.destroy
          else
            civicbot_user = User.find(385)
            title = "Obsolete SO Term"
            text = "This variant uses an obsolete Sequence Ontology term #{obsolete_type.display_name} (#{obsolete_type.soid})."
            if term['consider'].present?
              text += " Consider #{term['consider']}."
            end
            if term['replaced_by'].present?
              text += " Replaced by #{term['replaced_by']}."
            end
            obsolete_type.variants.each do |variant|
              if variant.flags.select{|f| f.state == 'open' && f.open_activity.note =~ /obsolete Sequence Ontology term/ && f.open_activity.user_id == 385}.count == 0
                Activities::FlagEntity.new(
                  flagging_user: civicbot_user,
                  flaggable: variant,
                  organization_id: nil,
                  note: text
                ).perform
              end
            end
          end
        end
      end
    end
  end
end
