class EventHierarchy
  def self.self_with_children(subscribable)
    traverse(subscribable, :children, [ subscribable ])
  end

  def self.self_with_direct_relations(subscribable)
    traverse(subscribable, :direct_relations, [ subscribable ])
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
        Feature => {
          children: [
            :variants
          ],
          direct_relations: [
            :revisions
          ]
        },
        Variant => {
          children: [],
          direct_relations: [
            :revisions
          ]
        },
        EvidenceItem => {
          children: [],
          direct_relations: [
            :revisions
          ]
        },
        Revision => {
          children: [],
          direct_relations: []
        },
        Assertion => {
          children: [
            :evidence_items
          ],
          direct_relations: [
            :revisions
          ]
        },
        MolecularProfile => {
          children: [
            :variants,
            :evidence_items,
            :assertions
          ],
          direct_relations: [
            :revisions
          ]
        }
      }
      hierarchy.default = {
        direct_relations: [],
        children: []
      }
      @hierarchy = hierarchy
    end
  end
end
