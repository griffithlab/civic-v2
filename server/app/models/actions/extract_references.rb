require "set"

module Actions
  class ExtractReferences
    include Actions::Transactional
    attr_reader :referenced_items, :input_segments, :mode, :replace_eid_with_source, :scan_regex, :curie_scan_regex, :curie_split_regex, :split_regex, :segments

    def initialize(input_segments, mode: "tags", replace_eid_with_source: false)
      @input_segments = Array(input_segments)
      @referenced_items = Set.new
      @segments = []
      @mode = mode
      @replace_eid_with_source = replace_eid_with_source
    end

    private
    def execute
      @segments = find_matches.reject(&:blank?)
    end

    def find_matches
      input_segments.flat_map do |segment|
        if segment.is_a?(String)
          split_segments = segment.split(self.class.split_regex).flat_map { |s| s.split(self.class.curie_split_regex) }.map do |split_segment|
            if match = (split_segment.match(self.class.scan_regex) || split_segment.match(self.class.curie_scan_regex))
              (klass, tag_type) = self.class.extract_type(match[:type])
              if referenced_item = klass.find_by(id: match[:id])
                referenced_items << referenced_item
                if replace_eid_with_source && klass == EvidenceItem
                  referenced_item = referenced_item.source
                  tag_type = "SOURCE"
                end
                display_name = referenced_item.respond_to?(:display_name) ? referenced_item.display_name : referenced_item.name
                if mode == "tags"
                  val = {
                    entity_id: referenced_item.id,
                    display_name: display_name,
                    tag_type: tag_type,
                    link: referenced_item.link,
                    revision_set_id: referenced_item.respond_to?(:revision_set_id) ? referenced_item.revision_set_id : nil,
                    feature: referenced_item.respond_to?(:feature) ? referenced_item.feature : nil,
                  }
                  if referenced_item.respond_to?(:deprecated)
                    val[:deprecated] = referenced_item.deprecated
                  end
                  if referenced_item.respond_to?(:retracted)
                    if referenced_item.retracted && referenced_item.retraction_nature == "Retraction"
                      val[:deprecated] = true
                    end
                  end
                  if referenced_item.respond_to?(:flagged)
                    val[:flagged] = referenced_item.flagged
                  end
                  if referenced_item.respond_to?(:status)
                    val[:status] = referenced_item.status
                  end
                elsif mode == "names"
                  if tag_type == "SOURCE"
                    if referenced_item.source_type == "PubMed"
                      val = "PMID: #{referenced_item.citation_id}"
                    else
                      val = "#{referenced_item.source_type}: #{referenced_item.citation_id}"
                    end
                  else
                    val = display_name
                  end
                elsif mode == "curies"
                  if replace_eid_with_source && klass == EvidenceItem
                    if referenced_item.source_type == "PubMed"
                      val = "pubmed:#{referenced_item.citation_id}"
                    else
                      val = "civic.sid:#{referenced_item.id}"
                    end
                  else
                    val = split_segment
                  end
                end
                val
              else
                split_segment
              end
            else
              split_segment
            end
          end
          if split_segments.all? { |s| s.is_a?(String) }
            split_segments = split_segments.join("")
          end
          split_segments
        else
          segment
        end
      end
    end

    def self.status_value_for_referenced_entity(item)
      if item.is_a?(EvidenceItem) || item.is_a?(Assertion)
        item.status
      else
        nil
      end
    end

    def self.typeahead_matches(query_term)
      if match = "##{query_term}".match(self.scan_regex)
        (klass, tag_type) = self.extract_type(match[:type])
        if referenced_items = klass.where("CAST(id as TEXT) LIKE ?", "#{match[:id]}%").order(:id).limit(10)
          return referenced_items.map do |referenced_item|
            val = {
              entity_id: referenced_item.id,
              display_name: referenced_item.respond_to?(:display_name) ? referenced_item.display_name : referenced_item.name,
              tag_type: tag_type,
              feature: referenced_item.respond_to?(:feature) ? referenced_item.feature : nil,
            }
            if referenced_item.respond_to?(:deprecated)
              val[:deprecated] = referenced_item.deprecated
            end
            if referenced_item.respond_to?(:flagged)
              val[:flagged] = referenced_item.flagged
            end
            if referenced_item.respond_to?(:status)
              val[:status] = referenced_item.status
            end
            val
          end
        else
          return []
        end
      else
        return []
      end
    end

    def self.extract_type(type)
      case type.upcase
      when "V"
        [ Variant, "VARIANT" ]
      when "F"
        [ Feature, "FEATURE" ]
      when "G"
        [ Feature, "FEATURE" ]
      when "VG"
        [ VariantGroup, "VARIANT_GROUP" ]
      when "E"
        [ EvidenceItem, "EVIDENCE_ITEM" ]
      when "R"
        [ Revision, "REVISION" ]
      when "A"
        [ Assertion, "ASSERTION" ]
      when "MP"
        [ MolecularProfile, "MOLECULAR_PROFILE" ]
      when "S"
        [ Source, "SOURCE" ]
      end
    end

    def self.split_regex
      @split_regex ||= Regexp.new(/\s*(#(?:a|v|f|g|vg|e|r|mip|s)(?:id)?\d+)\b/i)
    end

    def self.curie_split_regex
      @curie_split_regex ||= Regexp.new(/\s*(civic\.(?:a|v|f|g|vg|e|r|mp|s)(?:id)\:\d+)\b/i)
    end

    def self.scan_regex
      @scan_regex ||= Regexp.new(/#(?<type>a|v|f|g|vg|e|r|mp|s)(?:id)?(?<id>\d+)\b/i)
    end

    def self.curie_scan_regex
      @curie_scan_regex ||= Regexp.new(/civic\.(?<type>a|v|f|g|vg|e|r|mp|s)(?:id):(?<id>\d+)\b/i)
    end
  end
end
