module Types::Revisions
  class LinkoutData < Types::BaseObject
    field :name, String, null: false
    field :current_value,  Types::Revisions::ModeratedFieldType, null: false
    field :suggested_value, Types::Revisions::ModeratedFieldType, null: false
    field :diff_value, Types::Revisions::ModeratedFieldDiffType, null: false

    def self.from_revision(r)
      if r.field_name.ends_with?('_id') || r.field_name.ends_with?('_ids')
        current_set = Set.new(Array(r.current_value))
        suggested_set = Set.new(Array(r.suggested_value))
        {
          name: revision_display_name(r),
          current_value: -> { { objects: value_for_field(r, method_name: :current_value) } },
          suggested_value: -> { { objects: value_for_field(r, method_name: :suggested_value) } },
          diff_value: -> { {
            added_objects: value_for_set(r, set: suggested_set - current_set),
            removed_objects: value_for_set(r, set: current_set - suggested_set),
            kept_objects: value_for_set(r, set: current_set & suggested_set)
          } }
        }
      else
        {
          name: revision_display_name(r),
          current_value: { value: r.current_value },
          suggested_value: { value: r.suggested_value },
          diff_value: { value: Diffy::Diff.new(r.current_value, r.suggested_value).to_s(:html) }
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
        {
          id: obj.id,
          entity_type: obj.class.to_s,
          display_name: obj.display_name,
          display_type: obj.respond_to?(:display_type) ? obj.display_type : nil
        }
      end

      if values.size != set.size
        raise StandardError.new("Proposed #{field_class.to_s} with ids: #{set.to_a.join(', ')} found only: #{values.map { |x| x[:id] }.join(', ')}")
      end

      return values
    end
  end
end
