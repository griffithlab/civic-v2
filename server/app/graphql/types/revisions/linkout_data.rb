module Types::Revisions
  class LinkoutData < Types::BaseObject
    field :name, String, null: false
    field :current_value,  Types::Revisions::ModeratedFieldType, null: false
    field :suggested_value, Types::Revisions::ModeratedFieldType, null: false
    field :diff_value, Types::Revisions::ModeratedFieldDiffType, null: false

    def self.from_revision(r)
      if (r.field_name.ends_with?('_id') || r.field_name.ends_with?('_ids')) && ! non_object_fields.include?(r.field_name)
        current_set = Set.new(Array(r.current_value))
        suggested_set = Set.new(Array(r.suggested_value))
        {
          name: revision_display_name(r),
          current_value: -> { { objects: value_for_field(r, method_name: :current_value) } },
          suggested_value: -> { { objects: value_for_field(r, method_name: :suggested_value) } },
          diff_value: -> { {
            current_objects: value_for_set(r, set: current_set),
            added_objects: value_for_set(r, set: suggested_set - current_set),
            removed_objects: value_for_set(r, set: current_set - suggested_set),
            kept_objects: value_for_set(r, set: current_set & suggested_set),
            suggested_objects: value_for_set(r, set: suggested_set)
          } }
        }
      else
        diff = Diffy::SplitDiff.new(r.current_value, r.suggested_value, :format => :html )
        {
          name: revision_display_name(r),
          current_value: { value: r.current_value },
          suggested_value: { value: r.suggested_value },
          diff_value: {
            left: diff.left,
            right: diff.right
          }
        }
      end
    end

    def current_value
      potentially_lazy_field(:current_value)
    end

    def suggested_value
      potentially_lazy_field(:suggested_value)
    end

    def diff_value
      potentially_lazy_field(:diff_value)
    end

    private
    def potentially_lazy_field(field)
      val = object[field]
      if val.respond_to?(:call)
        val.call
      else
        val
      end
    end

    def self.display_name(name)
      if name.ends_with?('_ids')
        name.singularize.titleize.pluralize
      else
        name.titleize
      end
    end

    private
    def self.revision_display_name(r)
      display_name(r.field_name)
    end

    def self.value_for_field(r, method_name:)
      value_for_set(r, set: Array(r.send(method_name)))
    end

    def self.value_for_set(r, set:)
      field_class = revision_display_name(r)
        .singularize
        .gsub(' ', '')
        .constantize
      values = field_class.where(id: set).map do |obj|
        deprecated = if obj.respond_to?(:deprecated)
          obj.deprecated
        elsif obj.respond_to?(:retraction_nature)
          obj.retraction_nature == 'Retraction'
        else
          nil
        end
        {
          id: obj.id,
          entity_type: obj.class.to_s,
          display_name: obj.display_name,
          display_type: obj.respond_to?(:display_type) ? obj.display_type : nil,
          link: obj.respond_to?(:link) ? obj.link : "",
          feature: obj.respond_to?(:feature) ? obj.feature : nil,
          deleted: false,
          deprecated: deprecated
        }
      end

      if values.size != set.size
        found_ids = values.map { |v| v[:id] }
        set.each do |id|
          if !found_ids.include?(id)
            values << {
              id: id,
              entity_type: field_class.to_s,
              display_name: nil,
              display_type: nil,
              link: nil,
              deprecated: nil,
              feature: nil,
              deleted: true
            }
          end
        end
      end

      return values
    end

    def self.non_object_fields
      @nof ||= [
        'ncit_id'
      ]
    end
  end
end
