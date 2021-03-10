class EventHierarchy
  def self.self_with_children(subscribable)
    traverse(subscribable, :children, [subscribable])
  end

  def self.self_with_direct_relations(subscribable)
    traverse(subscribable, :direct_relations, [subscribable])
  end

  private
  def self.traverse(root_subscribable, direction, list)
    self.hierarchy[root_subscribable.class][direction].each do |rel|
      Array(root_subscribable.send(rel)).each do |node|
        list << node
        traverse(node, direction, list)
      end
    end
    list
  end

  def self.hierarchy
    if @hierarchy
      @hierarchy
    else
      hierarchy = {
        Gene => {
          children: [
            :variants,
            :assertions
          ],
          direct_relations: [
            :revisions,
          ]
        },
        Variant => {
          children: [
            :evidence_items,
            :assertions
          ],
          direct_relations: [
            :revisions,
          ]
        },
        EvidenceItem => {
          children: [
          ],
          direct_relations: [
            :revisions,
          ]
        },
        Revision => {
          children: [ ],
        },
        Assertion => {
          children: [
            :evidence_items,
          ],
          direct_relations: [
            :revisions,
          ]
        }
      }
      hierarchy.default = {
        children: [
        ],
      }
      @hierarchy = hierarchy
    end
  end
end